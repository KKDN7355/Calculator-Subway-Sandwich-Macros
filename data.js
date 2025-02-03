const macrosData = {
    bread_type: {
        italian_herbs_and_cheese:       { cal: 234  , pro:  9.4, fat:  4.5, sat_fat: 1.9, car: 37.3 },
        malted_rye:                     { cal: 244  , pro: 10.6, fat:  4.5, sat_fat: 0.7, car: 37.8 },
        wheat:                          { cal: 195  , pro:  7.5, fat:  2.1, sat_fat: 0.3, car: 35.0 },
        white:                          { cal: 195  , pro:  7.4, fat:  2.1, sat_fat: 0.3, car: 35.2 }
    },
    meat_type: {
        buffalo_chicken:                { cal:  88.8, pro: 14.4, fat:  2.0, sat_fat: 0.6, car:  3.2 },
        chicken_and_bacon_ranch_melt:   { cal: 130.5, pro: 17.1, fat:  6.8, sat_fat: 2.6, car:  0.5 },
        chicken_classic:                { cal: 137.0, pro:  9.6, fat:  8.7, sat_fat: 2.7, car:  5.2 },
        chicken_schnitzel:              { cal: 183.0, pro: 17.2, fat:  9.5, sat_fat: 1.7, car:  7.1 },
        chicken_strips:                 { cal:  73.1, pro: 14.1, fat:  1.8, sat_fat: 0.6, car:  0.3 },
        chicken_teriyaki:               { cal: 102.4, pro: 14.1, fat:  1.9, sat_fat: 0.6, car:  7.3 },
        italian_bmt:                    { cal: 188.9, pro: 14.7, fat: 13.5, sat_fat: 5.2, car:  2.5 },
        leg_ham:                        { cal:  46.9, pro:  6.5, fat:  1.7, sat_fat: 0.6, car:  1.3 },
        meatball_melt:                  { cal: 199.0, pro: 10.7, fat: 13.4, sat_fat: 5.4, car:  9.8 },
        pizza_melt:                     { cal: 142.0, pro:  8.2, fat: 11.8, sat_fat: 4.6, car:  1.2 },
        seafood_sensation:              { cal: 126.0, pro:  3.0, fat:  8.4, sat_fat: 2.1, car:  9.1 },
        smashed_falafel:                { cal: 163.0, pro:  6.6, fat:  5.9, sat_fat: 1.0, car: 17.6 },
        southern_style_chicken:         { cal: 162.0, pro:  6.7, fat:  8.4, sat_fat: 1.2, car: 15.0 },
        steak_melt:                     { cal: 106.0, pro: 12.8, fat:  4.5, sat_fat: 1.5, car:  2.0 },
        tuna_and_mayo:                  { cal: 113.0, pro: 10.2, fat:  7.6, sat_fat: 1.1, car:  1.0 },
        turkey:                         { cal:  50.5, pro:  8.8, fat:  1.0, sat_fat: 0.3, car:  1.2 },
        veggie_patty:                   { cal: 192.0, pro:  7.6, fat:  9.4, sat_fat: 1.8, car: 16.5 }
    },
    meat_extra: {
        pepperoni:                      { cal:  71  , pro:  4.1, fat:  5.9, sat_fat: 2.3, car:  0.6 },
        smoky_bacon:                    { cal:  57.4, pro:  3.0, fat:  5.0, sat_fat: 2.0, car:  0.2 }
    },
    cheese_type: {
        mozzarella:                     { cal:  45.8, pro:  2.9, fat:  3.6, sat_fat: 2.5, car:  0.6 },
        natural_cheddar:                { cal:  56.4, pro:  3.4, fat:  4.8, sat_fat: 2.9, car:  0.1 },
        old_english:                    { cal:  38.9, pro:  2.3, fat:  3.1, sat_fat: 2.1, car:  0.5 }
    },
    salads: {
        capsicum:                       { cal:   1.4, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  0.2 },
        carrots:                        { cal:   2.9, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  0.5 },
        cucumber:                       { cal:   2.1, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  0.4 },
        jalapenos:                      { cal:   1.6, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  0.2 },
        lettuce:                        { cal:   2.9, pro:  0.2, fat:  0.0, sat_fat: 0.0, car:  0.4 },
        olives:                         { cal:   3.8, pro:  0.0, fat:  0.3, sat_fat: 0.1, car:  0.2 },
        onions:                         { cal:   2.8, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  0.5 },
        pickles:                        { cal:   1.4, pro:  0.0, fat:  0.0, sat_fat: 0.0, car:  0.2 },
        spinach:                        { cal:   1.5, pro:  0.2, fat:  0.0, sat_fat: 0.0, car:  0.2 },
        tomato:                         { cal:   6.3, pro:  0.3, fat:  0.1, sat_fat: 0.0, car:  0.9 }
    },
    salads_extra: {
        avocado:                        { cal:  58.3, pro:  1.2, fat:  5.3, sat_fat: 0.6, car:  3.5 },
        beetroot:                       { cal:  11.8, pro:  0.2, fat:  0.0, sat_fat: 0.0, car:  2.5 },
        pineapple:                      { cal:  16.3, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  3.7 }
    },
    sauce_type: {
        blue_cheese_dressing:           { cal:  61.3, pro:  0.3, fat:  6.2, sat_fat: 0.6, car:  1.4 },
        chipotle_southwest:             { cal:  93.9, pro:  0.6, fat:  9.8, sat_fat: 1.6, car:  1.2 },
        garlic_aioli:                   { cal:  58.7, pro:  0.3, fat:  5.8, sat_fat: 0.9, car:  1.6 },
        habanero_hot:                   { cal:  19.7, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  4.6 },
        honey_mustard:                  { cal:  29.6, pro:  0.3, fat:  0.3, sat_fat: 0.0, car:  6.5 },
        marinara:                       { cal:  14.3, pro:  0.3, fat:  0.5, sat_fat: 0.1, car:  1.8 },
        mayonnaise:                     { cal:  43.9, pro:  0.1, fat:  4.6, sat_fat: 0.7, car:  0.6 },
        ranch_dressing:                 { cal:  56.2, pro:  0.3, fat:  6.0, sat_fat: 0.5, car:  0.6 },
        smoky_bbq:                      { cal:  30.6, pro:  0.1, fat:  0.0, sat_fat: 0.0, car:  7.3 },
        spicy_mayo:                     { cal:  72.1, pro:  0.2, fat:  7.3, sat_fat: 0.6, car:  1.7 },
        sweet_chilli:                   { cal:  40.4, pro:  0.1, fat:  0.1, sat_fat: 0.0, car:  9.6 },
        sweet_onion:                    { cal:  38.6, pro:  0.1, fat:  0.1, sat_fat: 0.0, car:  9.1 },
        thousand_island_dressing:       { cal:  71.3, pro:  0.2, fat:  5.7, sat_fat: 0.9, car:  5.0 },
        tomato:                         { cal:  24.3, pro:  0.3, fat:  0.0, sat_fat: 0.0, car:  5.4 }
    }
};