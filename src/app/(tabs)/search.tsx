import SearchTourCard from "@/components/tour/SearchTourCard";
import ThemedView from "@/components/ui/ThemedView";
import { toursData } from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Modal,
  PanResponder,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DIVISIONS = [
  "All",
  "Chittagong",
  "Sylhet",
  "Khulna",
  "Dhaka",
  "Rajshahi",
];
const AMENITIES = [
  "Free WiFi",
  "AC Transport",
  "Guide Included",
  "Dinner",
  "Mountain Cottage",
  "Tribal Dinner",
  "Armed Security",
  "Cruise Ship Cabin",
];

const MAX_PRICE = 25000;

const Search = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Filter states
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [priceLimit, setPriceLimit] = useState(25000);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  // Slider animation state
  const sliderWidth = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        let newX =
          gestureState.dx + (priceLimit / MAX_PRICE) * sliderWidth.current;
        if (newX < 0) newX = 0;
        if (newX > sliderWidth.current) newX = sliderWidth.current;

        const newPrice = Math.round((newX / sliderWidth.current) * MAX_PRICE);
        setPriceLimit(newPrice);
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const resetFilters = () => {
    setSelectedDivision("All");
    setPriceLimit(MAX_PRICE);
    setSelectedAmenities([]);
  };

  // Filter the tours based on selected criteria
  const filteredTours = toursData.filter((tour) => {
    // Basic search text filter
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tour.location &&
        tour.location.toLowerCase().includes(searchQuery.toLowerCase()));

    // Division filter
    const matchesDivision =
      selectedDivision === "All" ||
      (tour.division && tour.division.includes(selectedDivision));

    // Price filter
    const matchesPrice = (tour.costFrom || 0) <= priceLimit;

    // Amenities filter (if any selected, tour must have at least one)
    const matchesAmenities =
      selectedAmenities.length === 0 ||
      (tour.amenities &&
        selectedAmenities.some((a) => tour.amenities?.includes(a)));

    return matchesSearch && matchesDivision && matchesPrice && matchesAmenities;
  });

  return (
    <ThemedView className="flex-1 bg-slate-50">
      <View className="px-5 pt-4 pb-2">
        <Text className="text-slate-900 font-black text-2xl mb-4">
          Explore Tours
        </Text>

        {/* Search & Filter Bar */}
        <View className="flex-row items-center space-x-3 mb-2">
          <View className="flex-1 flex-row items-center bg-slate-100 rounded-2xl px-4 py-3 mr-3">
            <Ionicons name="search-outline" size={20} color="#94a3b8" />
            <TextInput
              placeholder="Search destination, hotel, forest..."
              placeholderTextColor="#94a3b8"
              className="flex-1 ml-2 text-slate-800 text-sm font-medium"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity
            onPress={() => setIsFilterVisible(true)}
            className="bg-teal-600 w-12 h-12 rounded-2xl items-center justify-center"
          >
            <Ionicons name="options-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center justify-between px-5 py-3 border-b border-slate-200">
        <Text className="text-slate-400 font-bold text-[11px] tracking-widest uppercase">
          Search Results
        </Text>
        <Text className="text-slate-400 font-bold text-[11px] tracking-widest uppercase">
          {filteredTours.length} Found
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {filteredTours.map((tour) => (
          <SearchTourCard key={tour.slug} tour={tour} />
        ))}
        {filteredTours.length === 0 && (
          <View className="items-center justify-center py-10">
            <Ionicons name="search-outline" size={48} color="#cbd5e1" />
            <Text className="text-slate-500 mt-4 text-center font-medium">
              No tours found matching your criteria.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Filter Bottom Sheet Modal */}
      <Modal
        visible={isFilterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setIsFilterVisible(false)}
            activeOpacity={1}
          />
          <View className="bg-white rounded-t-3xl pt-2 pb-6 px-5 max-h-[85%]">
            {/* Drag Indicator */}
            <View className="w-12 h-1.5 bg-slate-200 rounded-full self-center mb-6" />

            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-slate-900 font-black text-xl">
                Advanced Filters
              </Text>
              <TouchableOpacity onPress={resetFilters}>
                <Text className="text-slate-400 font-bold text-sm">
                  Reset All
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Division Section */}
              <Text className="text-slate-400 font-bold text-[11px] tracking-widest uppercase mb-3 mt-2">
                Bangladesh Division
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-6"
              >
                <View className="flex-row space-x-2">
                  {DIVISIONS.map((div) => {
                    const isSelected = selectedDivision === div;
                    return (
                      <TouchableOpacity
                        key={div}
                        onPress={() => setSelectedDivision(div)}
                        className={`px-4 py-2 rounded-full border mr-2 ${
                          isSelected
                            ? "bg-teal-500 border-teal-500"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <Text
                          className={`font-bold text-sm ${
                            isSelected ? "text-white" : "text-slate-600"
                          }`}
                        >
                          {div}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>

              {/* Price Limit Section */}
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-slate-400 font-bold text-[11px] tracking-widest uppercase">
                  Price Limit
                </Text>
                <Text className="text-teal-600 font-bold text-sm uppercase tracking-wide">
                  Up to ৳{priceLimit.toLocaleString()}
                </Text>
              </View>

              {/* Custom Slider */}
              <View className="mb-8">
                <View
                  className="h-1.5 bg-slate-100 rounded-full w-full justify-center relative"
                  onLayout={(e) => {
                    sliderWidth.current = e.nativeEvent.layout.width;
                  }}
                >
                  <View
                    className="h-full bg-teal-500 rounded-full"
                    style={{ width: `${(priceLimit / MAX_PRICE) * 100}%` }}
                  />
                  <View
                    {...panResponder.panHandlers}
                    className="absolute w-8 h-8 rounded-full items-center justify-center"
                    style={{
                      left: `${(priceLimit / MAX_PRICE) * 100}%`,
                      marginLeft: -16,
                    }}
                  >
                    <View className="w-4 h-4 bg-teal-500 rounded-full shadow-sm" />
                  </View>
                </View>
                <View className="flex-row justify-between mt-3">
                  <Text className="text-slate-400 text-xs">৳0</Text>
                  <Text className="text-slate-400 text-xs">৳12,000</Text>
                  <Text className="text-slate-400 text-xs">৳25,000</Text>
                </View>
              </View>

              {/* Amenities Section */}
              <Text className="text-slate-400 font-bold text-[11px] tracking-widest uppercase mb-3">
                Tour Amenities & Highlights
              </Text>
              <View className="flex-row flex-wrap justify-between mb-8">
                {AMENITIES.map((amenity) => {
                  const isSelected = selectedAmenities.includes(amenity);
                  return (
                    <TouchableOpacity
                      key={amenity}
                      onPress={() => toggleAmenity(amenity)}
                      className={`px-4 py-3 rounded-2xl border mb-2 w-[48%] ${
                        isSelected
                          ? "bg-teal-50 border-teal-500"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <Text
                        className={`font-semibold text-sm ${
                          isSelected ? "text-teal-700" : "text-slate-600"
                        }`}
                      >
                        {amenity}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            {/* Apply Button */}
            <TouchableOpacity
              onPress={() => setIsFilterVisible(false)}
              className="bg-teal-500 py-4 rounded-2xl items-center mt-2 shadow-sm mb-4"
            >
              <Text className="text-white font-bold text-sm tracking-widest uppercase">
                Apply Filters ({filteredTours.length} Found)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
};

export default Search;
