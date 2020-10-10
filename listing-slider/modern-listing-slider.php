<?php
/*_*_*_*_*_*_

Custom property slider for almosthomeusaa
By steelbrideg.io 
chris@steelbridge.io

NOTE:
Navigate to slides by searching number slide number as #1 = First Slide, #T1 1st thumbnail slide

_*_*_*_*_*_*/

if (!empty($ah_custom_image_slider_1)) { 

// Contains the entire slider. If First Slide isn't published, slider won't replace originial.
?>

		<!--*-*-*-*-*-*-*-*-*-*- BOOTSTRAP CAROUSEL *-*-*-*-*-*-*-*-*-*-->
    
    <div id="thumbnail_image_carousel" class="carousel thumbnail_image_carousel_fade thumbnail_image_carousel_wrapper" data-ride="carousel" data-interval="false" data-pause="hover">

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">

      <!--========= #1 First Slide =========-->
      <div class="item active">
        <img src="<?php echo $ah_custom_image_slider_1; ?>" alt="<?php echo $ah_custom_image_slider_1_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">1</p>
        </div>
      </div>
      
      <?php if (!empty($ah_custom_image_slider_2)) { ?> 
      
      <!--========= #2 Second Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_2; ?>" alt="<?php echo $ah_custom_image_slider_2_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">2</p>
        </div>
      </div>
      
      <?php } if (!empty($ah_custom_image_slider_3)) { ?>
      
      <!--========= #3 Third Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_3; ?>" alt="<?php echo $ah_custom_image_slider_3_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">3</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_4 )) { ?>
      
      <!--========= #4 Fourth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_4; ?>" alt="<?php echo $ah_custom_image_slider_4_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">4</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_5 )) { ?>

      <!--========= #5 Fifth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_5; ?>" alt="<?php echo $ah_custom_image_slider_4_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">5</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_6 )) { ?>

      <!--========= #6 Sixth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_6; ?>" alt="<?php echo $ah_custom_image_slider_6_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">6</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_7 )) { ?>
      
      <!--========= #7 Seventh Slide =========-->
      <div class="item">
         <img src="<?php echo $ah_custom_image_slider_7; ?>" alt="<?php echo $ah_custom_image_slider_7_alt; ?>" />
         <div class="carousel-caption">
          <p class="slide-number">7</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_8 )) { ?>
      
      <!--========= #8 Eighth Slide =========-->
      <div class="item">
         <img src="<?php echo $ah_custom_image_slider_8; ?>" alt="<?php echo $ah_custom_image_slider_8_alt; ?>" />
         <div class="carousel-caption">
          <p class="slide-number">8</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_9 )) { ?>
      
      <!--========= #9 Ninth Slide =========-->
      <div class="item">
         <img src="<?php echo $ah_custom_image_slider_9; ?>" alt="<?php echo $ah_custom_image_slider_9_alt; ?>" />
         <div class="carousel-caption">
          <p class="slide-number">9</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_10 )) { ?>
      
      <!--========= #10 Tenth Slide =========-->
      <div class="item">
         <img src="<?php echo $ah_custom_image_slider_10; ?>" alt="<?php echo $ah_custom_image_slider_10_alt; ?>" />
         <div class="carousel-caption">
          <p class="slide-number">10</p>
        </div>
      </div>
     
     <?php } if (!empty(  $ah_custom_image_slider_11 )) { ?>
     
      <!--========= #11 Eleventh Slide =========-->
      <div class="item">
       <img src="<?php echo $ah_custom_image_slider_11; ?>" alt="<?php echo $ah_custom_image_slider_11_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">11</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_12 )) { ?>

      <!--========= #12 Twelfth Slide =========-->
      <div class="item">
         <img src="<?php echo $ah_custom_image_slider_12; ?>" alt="<?php echo $ah_custom_image_slider_12_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">12</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_13 )) { ?>
      
      <!--========= #13 Thirteenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_13; ?>" alt="<?php echo $ah_custom_image_slider_13_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">13</p>
        </div>
      </div>

      <?php } if (!empty( $ah_custom_image_slider_14 )) { ?>

      <!--========= #14 Fourteenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_14; ?>" alt="<?php echo $ah_custom_image_slider_14_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">14</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_15 )) { ?>
      
      <!--========= #15 Fiftenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_15; ?>" alt="<?php echo $ah_custom_image_slider_15_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">15</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_16 )) { ?>
      
      <!--========= #16 Sixteenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_16; ?>" alt="<?php echo $ah_custom_image_slider_16_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">16</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_17 )) { ?>
      
      <!--========= #17 Seventeenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_17; ?>" alt="<?php echo $ah_custom_image_slider_17_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">17</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_18 )) { ?>
      
      <!--========= #18 Eighteenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_18; ?>" alt="<?php echo $ah_custom_image_slider_18_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">18</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_19 )) { ?>
      
      <!--========= #19 Nineteenth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_19; ?>" alt="<?php echo $ah_custom_image_slider_19_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">19</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_20 )) { ?>
      
      <!--========= #20 Twentyth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_20; ?>" alt="<?php echo $ah_custom_image_slider_20_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">20</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_21 )) { ?>
      
      <!--========= #21 Twentyfirst Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_21; ?>" alt="<?php echo $ah_custom_image_slider_21_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">21</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_22 )) { ?>
      
      <!--========= #22 Twentysecond Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_22; ?>" alt="<?php echo $ah_custom_image_slider_22_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">22</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_23 )) { ?>
      
      <!--========= #23 Twentythird Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_23; ?>" alt="<?php echo $ah_custom_image_slider_23_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">23</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_24 )) { ?>
      
      <!--========= #24 Twentyfourth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_24; ?>" alt="<?php echo $ah_custom_image_slider_24_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">24</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_25 )) { ?>
      
      <!--========= #25 Twentyfifth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_25; ?>" alt="<?php echo $ah_custom_image_slider_25_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">25</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_26 )) { ?>
      
      <!--========= #26 Twentysix Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_26; ?>" alt="<?php echo $ah_custom_image_slider_26_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">26</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_27 )) { ?>
      
      <!--========= #27 Twentyseven Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_27; ?>" alt="<?php echo $ah_custom_image_slider_27_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">27</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_28 )) { ?>
      
      <!--========= #28 Twentyeight Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_28; ?>" alt="<?php echo $ah_custom_image_slider_28_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">28</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_29 )) { ?>
      
      <!--========= #29 Twentynine Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_29; ?>" alt="<?php echo $ah_custom_image_slider_29_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">29</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_30 )) { ?>
      
      <!--========= #30 Thirtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_30; ?>" alt="<?php echo $ah_custom_image_slider_30_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">30</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_31 )) { ?>
      
      <!--========= #31 Thirtyfirst Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_31; ?>" alt="<?php echo $ah_custom_image_slider_31_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">31</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_32 )) { ?>
      
      <!--========= #32 Thirtysecond Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_32; ?>" alt="<?php echo $ah_custom_image_slider_32_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">32</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_33 )) { ?>
      
      <!--========= #33 Thirtythird Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_33; ?>" alt="<?php echo $ah_custom_image_slider_33_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">33</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_34 )) { ?>
      
      <!--========= #34 Thirtyfourth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_34; ?>" alt="<?php echo $ah_custom_image_slider_34_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">34</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_35 )) { ?>
      
      <!--========= #35 Thirtyfifth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_35; ?>" alt="<?php echo $ah_custom_image_slider_35_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">35</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_36 )) { ?>
      
      <!--========= #36 Thirtysixth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_36; ?>" alt="<?php echo $ah_custom_image_slider_36_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">36</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_37 )) { ?>
      
      <!--========= #37 Thirtyseventh Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_37; ?>" alt="<?php echo $ah_custom_image_slider_37_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">37</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_38 )) { ?>
      
      <!--========= #38 Thirtyeighth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_38; ?>" alt="<?php echo $ah_custom_image_slider_38_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">38</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_39 )) { ?>
      
      <!--========= #39 Thirtyninth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_39; ?>" alt="<?php echo $ah_custom_image_slider_39_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">39</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_40 )) { ?>
      
      <!--========= #40 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_40; ?>" alt="<?php echo $ah_custom_image_slider_40_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">40</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_41 )) { ?>
      
      <!--========= #41 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_41; ?>" alt="<?php echo $ah_custom_image_slider_41_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">41</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_42 )) { ?>
      
      <!--========= #42 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_42; ?>" alt="<?php echo $ah_custom_image_slider_42_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">42</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_43 )) { ?>
      
      <!--========= #43 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_43; ?>" alt="<?php echo $ah_custom_image_slider_43_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">43</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_44 )) { ?>
      
      <!--========= #44 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_44; ?>" alt="<?php echo $ah_custom_image_slider_44_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">44</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_45 )) { ?>
      
      <!--========= #45 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_45; ?>" alt="<?php echo $ah_custom_image_slider_45_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">45</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_46 )) { ?>
      
      <!--========= #46 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_46; ?>" alt="<?php echo $ah_custom_image_slider_46_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">46</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_47 )) { ?>
      
      <!--========= #47 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_47; ?>" alt="<?php echo $ah_custom_image_slider_47_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">47</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_48 )) { ?>
      
      <!--========= #48 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_48; ?>" alt="<?php echo $ah_custom_image_slider_48_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">48</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_49 )) { ?>
      
      <!--========= #49 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_49; ?>" alt="<?php echo $ah_custom_image_slider_49_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">49</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_50 )) { ?>
      
      <!--========= #50 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_50; ?>" alt="<?php echo $ah_custom_image_slider_50_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">50</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_51 )) { ?>
      
      <!--========= #51 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_51; ?>" alt="<?php echo $ah_custom_image_slider_51_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">51</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_52 )) { ?>
      
      <!--========= #52 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_52; ?>" alt="<?php echo $ah_custom_image_slider_52_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">52</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_53 )) { ?>
      
      <!--========= #53 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_53; ?>" alt="<?php echo $ah_custom_image_slider_53_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">53</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_54 )) { ?>
      
      <!--========= #54 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_54; ?>" alt="<?php echo $ah_custom_image_slider_54_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">54</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_55 )) { ?>
      
      <!--========= #55 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_55; ?>" alt="<?php echo $ah_custom_image_slider_55_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">55</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_56 )) { ?>
      
      <!--========= #56 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_56; ?>" alt="<?php echo $ah_custom_image_slider_56_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">56</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_57 )) { ?>
      
      <!--========= #57 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_57; ?>" alt="<?php echo $ah_custom_image_slider_57_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">57</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_58 )) { ?>
      
      <!--========= #58 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_58; ?>" alt="<?php echo $ah_custom_image_slider_58_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">58</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_59 )) { ?>
      
      <!--========= #59 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_59; ?>" alt="<?php echo $ah_custom_image_slider_59_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">59</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_60 )) { ?>
      
      <!--========= #60 Fourtieth Slide =========-->
      <div class="item">
        <img src="<?php echo $ah_custom_image_slider_60; ?>" alt="<?php echo $ah_custom_image_slider_60_alt; ?>" />
        <div class="carousel-caption">
          <p class="slide-number">60</p>
        </div>
      </div>
      
      <?php } if (!empty( $ah_custom_image_slider_1 )) { ?>
      
    </div>

    <!--======= Navigation Buttons =========-->

    <!--======= Left Button =========-->
    <a class="left carousel-control thumbnail_image_carousel_control_left" href="#thumbnail_image_carousel" role="button" data-slide="prev">
      <span class="fa fa-chevron-circle-left thumbnail_image_carousel_control_icons" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <!--======= Right Button =========-->
    <a class="right carousel-control thumbnail_image_carousel_control_right" href="#thumbnail_image_carousel" role="button" data-slide="next">
      <span class="fa fa-chevron-circle-right thumbnail_image_carousel_control_icons" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

  </div> <!--*-*-*-*-*-*-*-*-*-*- END BOOTSTRAP CAROUSEL *-*-*-*-*-*-*-*-*-*-->

  <!--*-*-*-*-*-*-*-*-*-*- BOOTSTRAP THUMBNAIL CAROUSEL *-*-*-*-*-*-*-*-*-*-->

  

  <div id="range_slides_6_columns_carousel" class="carousel slide range_slides_carousel_wrapper" data-ride="carousel" data-interval="false" data-pause="hover">

    <!--========= Wrapper for slides =========-->
    <div class="carousel-inner range_slides_carousel_inner" role="listbox">
      
      <!-- *_*_*_ ITEM ONE _*_*_* -->
      <div class="item active">
      <div class="row">
      
        <!--========= #T1 1st slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="0">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_1; ?>" alt="<?php echo $ah_custom_image_slider_1_alt; ?>" />
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">1</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_2 )) { ?>
      
        <!--========= #T2 2nd slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="1">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_2; ?>" alt="<?php echo $ah_custom_image_slider_2_alt; ?>" />
          <div class="thumbnailcarousel carousel-caption">
          <p class="slide-number">2</p>
          </div>
          </a>
        </div>
      
     <?php } if (!empty( $ah_custom_image_slider_3 )) { ?>
      
        <!--========= #T3 3rd slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="2">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_3; ?>" alt="<?php echo $ah_custom_image_slider_3_alt; ?>" />
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">3</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_4 )) { ?>

        <!--========= #T4 4th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="3">
          <a href="#">
             <img src="<?php echo $ah_custom_image_slider_4; ?>" alt="<?php echo $ah_custom_image_slider_4_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">4</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_5 )) { ?>

        <!--========= #T5 5th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="4">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_5; ?>" alt="<?php echo $ah_custom_image_slider_5_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">5</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_6 )) { ?>

        <!--========= #T6 6th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="5">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_6; ?>" alt="<?php echo $ah_custom_image_slider_6_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">6</p>
          </div>
          </a>
        </div>
        
      </div><!-- /.row -->
    </div><!-- /.item -->

      <?php } if (!empty( $ah_custom_image_slider_7 )) { ?>

    <!-- *_*_*_ ITEM TWO _*_*_* -->
    <div class="item">
      <div class="row">
      
        <!--========= #T7 7th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="6">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_7; ?>" alt="<?php echo $ah_custom_image_slider_7_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">7</p>
          </div>
          </a>
        </div>
      
      <?php if (!empty( $ah_custom_image_slider_8 )) { ?>

        <!--========= #T8 8th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="7">
          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_8; ?>" alt="<?php echo $ah_custom_image_slider_8_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">8</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_9 )) { ?>

        <!--========= #T9 9th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="8">

          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_9; ?>" alt="<?php echo $ah_custom_image_slider_9_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">9</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_10 )) { ?>

        <!--========= #T10 10th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="9">

          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_10; ?>" alt="<?php echo $ah_custom_image_slider_10_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">10</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty(  $ah_custom_image_slider_11 )) { ?>
      
        <!--========= #T11 11th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="10">

          <a href="#">
            <img src="<?php echo $ah_custom_image_slider_11; ?>" alt="<?php echo $ah_custom_image_slider_11_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">11</p>
          </div>
          </a>
        </div>
      
      <?php } if (!empty( $ah_custom_image_slider_12 )) { ?>

        <!--========= #T12 12th slide =========-->
        <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="11">

        <a href="#">
          <img src="<?php echo $ah_custom_image_slider_12; ?>" alt="<?php echo $ah_custom_image_slider_12_alt; ?>" /> 
          <div class="thumbnailcarousel carousel-caption">
            <p class="slide-number">12</p>
          </div>
          </a>
        </div>
        <?php } ?>
      </div><!-- /.row -->
    </div><!-- /.item -->
      
      <?php } if (!empty( $ah_custom_image_slider_13 )) { ?>

      <!--*_*_*_ ITEM THREE  _*_*_*-->
      <div class="item">
        <div class="row">

          <!--========= #T13 13th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="12">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_13; ?>" alt="<?php echo $ah_custom_image_slider_13_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">13</p>
            </div>
            </a>
          </div>

        <?php if (!empty( $ah_custom_image_slider_14 )) { ?>

          <!--========= #T14 14th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="13">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_14; ?>" alt="<?php echo $ah_custom_image_slider_14_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">14</p>
            </div>
            </a>
          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_15 )) { ?>

          <!--========= #T15 15th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="14">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_15; ?>" alt="<?php echo $ah_custom_image_slider_15_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">15</p>
            </div>
            </a>

          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_16 )) { ?>

          <!--========= #T16 16th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="15">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_16; ?>" alt="<?php echo $ah_custom_image_slider_16_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">16</p>
            </div>
            </a>

          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_17 )) { ?>

          <!--========= #T17 17th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="16">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_17; ?>" alt="<?php echo $ah_custom_image_slider_17_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">17</p>
            </div>
            </a>
          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_18 )) { ?>

          <!--========= #T18 18th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="17">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_18; ?>" alt="<?php echo $ah_custom_image_slider_18_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">18</p>
            </div>
            </a>
          </div>
          <?php } ?>
        </div><!-- /.row -->
      </div><!-- /.item -->
      
      <?php } if (!empty( $ah_custom_image_slider_19 )) { ?>

      <!--*_*_*_ ITEM FOUR  _*_*_*-->
      <div class="item">
        <div class="row">
        
          <!--========= #T19 19th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="18">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_19; ?>" alt="<?php echo $ah_custom_image_slider_19_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">19</p>
            </div>
            </a>
          </div>
          
      <?php  if (!empty( $ah_custom_image_slider_20 )) { ?>
        
          <!--========= #T20 20th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="19">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_20; ?>" alt="<?php echo $ah_custom_image_slider_20_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">20</p>
            </div>
            </a>
          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_21 )) { ?>

            <!--========= #T21 21th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="20">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_21; ?>" alt="<?php echo $ah_custom_image_slider_21_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">21</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_22 )) { ?>

            <!--========= #T22 22th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="21">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_22; ?>" alt="<?php echo $ah_custom_image_slider_22_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">22</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_23 )) { ?>

            <!--========= #T23 23th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="22">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_23; ?>" alt="<?php echo $ah_custom_image_slider_23_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">23</p>
              </div>
              </a>
            </div>
          
        <?php } if (!empty( $ah_custom_image_slider_24 )) { ?>
          
          <!--========= #T24 24th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="23">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_24; ?>" alt="<?php echo $ah_custom_image_slider_24_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">24</p>
            </div>
            </a>
          </div>
          <?php } ?>
        
        </div><!-- /.row -->
      </div><!-- /.item -->
      
      <?php } if (!empty( $ah_custom_image_slider_25 )) { ?>

      <!--*_*_*_ ITEM FIVE  _*_*_*-->
      <div class="item">
        <div class="row">
        
          <!--========= #T25 25th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="24">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_25; ?>" alt="<?php echo $ah_custom_image_slider_25_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">25</p>
            </div>
            </a>
          </div>
          
      <?php  if (!empty( $ah_custom_image_slider_26 )) { ?>
        
          <!--========= #T26 26th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="25">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_26; ?>" alt="<?php echo $ah_custom_image_slider_26_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">26</p>
            </div>
            </a>
          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_27 )) { ?>

            <!--========= #T27 27th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="26">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_27; ?>" alt="<?php echo $ah_custom_image_slider_27_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">27</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_28 )) { ?>

            <!--========= #T28 28th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="27">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_28; ?>" alt="<?php echo $ah_custom_image_slider_28_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">28</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_29 )) { ?>

            <!--========= #T29 29th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="28">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_29; ?>" alt="<?php echo $ah_custom_image_slider_29_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">29</p>
              </div>
              </a>
            </div>
          
        <?php } if (!empty( $ah_custom_image_slider_30 )) { ?>
          
          <!--========= #T30 30th slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="29">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_30; ?>" alt="<?php echo $ah_custom_image_slider_30_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">30</p>
            </div>
            </a>
          </div>
          <?php } ?>
        
        </div><!-- /.row -->
      </div><!-- /.item -->
      
      
      
      <?php } if (!empty( $ah_custom_image_slider_31 )) { ?>

      <!--*_*_*_ ITEM SIX  _*_*_*-->
      <div class="item">
        <div class="row">
        
          <!--========= #T31 31st slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="30">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_31; ?>" alt="<?php echo $ah_custom_image_slider_31_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">31</p>
            </div>
            </a>
          </div>
          
      <?php  if (!empty( $ah_custom_image_slider_32 )) { ?>
        
          <!--========= #T32 32nd slide =========-->
          <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="31">

            <a href="#">
              <img src="<?php echo $ah_custom_image_slider_32; ?>" alt="<?php echo $ah_custom_image_slider_32_alt; ?>" /> 
            <div class="thumbnailcarousel carousel-caption">
              <p class="slide-number">32</p>
            </div>
            </a>
          </div>
          
        <?php } if (!empty( $ah_custom_image_slider_33 )) { ?>

            <!--========= #T33 33rd slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="32">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_33; ?>" alt="<?php echo $ah_custom_image_slider_33_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">33</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_34 )) { ?>
        
            <!--========= #T34 34th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="33">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_34; ?>" alt="<?php echo $ah_custom_image_slider_34_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">34</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_35 )) { ?>
        
            <!--========= #T35 35th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="34">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_35; ?>" alt="<?php echo $ah_custom_image_slider_35_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">35</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_36 )) { ?>
        
            <!--========= #T36 36th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="35">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_36; ?>" alt="<?php echo $ah_custom_image_slider_36_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">36</p>
              </div>
              </a>
            </div>
            
        <?php } ?>
        
          </div><!-- /.row -->
        </div><!-- /.item -->
         
        <?php } if (!empty( $ah_custom_image_slider_37 )) { ?>
        
            <!--*_*_*_ ITEM SEVEN  _*_*_*-->
            
            <div class="item">
              <div class="row">
        
            <!--========= #T37 37th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="36">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_37; ?>" alt="<?php echo $ah_custom_image_slider_37_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">37</p>
              </div>
              </a>
            </div>
            
        <?php if (!empty( $ah_custom_image_slider_38 )) { ?>
        
            <!--========= #T38 38th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="37">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_38; ?>" alt="<?php echo $ah_custom_image_slider_38_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">38</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_39 )) { ?>
        
            <!--========= #T39 39th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="38">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_39; ?>" alt="<?php echo $ah_custom_image_slider_39_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">39</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_40 )) { ?>
        
            <!--========= #T40 40th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="39">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_40; ?>" alt="<?php echo $ah_custom_image_slider_40_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">40</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_41 )) { ?>
        
            <!--========= #T41 41th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="40">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_41; ?>" alt="<?php echo $ah_custom_image_slider_41_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">41</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_42 )) { ?>
        
            <!--========= #T42 42th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="41">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_42; ?>" alt="<?php echo $ah_custom_image_slider_42_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">42</p>
              </div>
              </a>
            </div>
            
          <?php } ?>
      
        </div><!-- /.row -->
      </div><!-- /.item -->
      
       <?php } if (!empty( $ah_custom_image_slider_43 )) { ?>
        
            <!--*_*_*_ ITEM EIGHT  _*_*_*-->
            
            <div class="item">
              <div class="row">
        
            <!--========= #T43 43th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="42">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_43; ?>" alt="<?php echo $ah_custom_image_slider_43_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">43</p>
              </div>
              </a>
            </div>
            
         <?php if (!empty( $ah_custom_image_slider_44 )) { ?>
        
            <!--========= #T44 44th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="43">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_44; ?>" alt="<?php echo $ah_custom_image_slider_44_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">44</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_45 )) { ?>
        
            <!--========= #T45 45th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="44">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_45; ?>" alt="<?php echo $ah_custom_image_slider_45_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">45</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_46 )) { ?>
        
            <!--========= #T46 46th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="45">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_46; ?>" alt="<?php echo $ah_custom_image_slider_46_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">46</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_47 )) { ?>
        
            <!--========= #T47 47th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="46">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_47; ?>" alt="<?php echo $ah_custom_image_slider_47_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">47</p>
              </div>
              </a>
            </div>
            
        <?php } if (!empty( $ah_custom_image_slider_48 )) { ?>
        
            <!--========= #T48 48th slide =========-->
            <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="47">

              <a href="#">
                <img src="<?php echo $ah_custom_image_slider_48; ?>" alt="<?php echo $ah_custom_image_slider_48_alt; ?>" /> 
              <div class="thumbnailcarousel carousel-caption">
                <p class="slide-number">48</p>
              </div>
              </a>
            </div>
            <?php } ?>
            
          </div><!-- /.row -->
        </div><!-- /.item -->
        
        <?php } if (!empty( $ah_custom_image_slider_49 )) { ?>
        
              <!--*_*_*_ ITEM NINE  _*_*_*-->
            
              <div class="item">
                <div class="row">
                
                <!--========= #T49 49th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="48">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_49; ?>" alt="<?php echo $ah_custom_image_slider_49_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">49</p>
                </div>
                </a>
              </div>

           <?php if (!empty( $ah_custom_image_slider_50 )) { ?>

              <!--========= #T50 50th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="49">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_50; ?>" alt="<?php echo $ah_custom_image_slider_50_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">50</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_51 )) { ?>

              <!--========= #T51 51th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="50">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_51; ?>" alt="<?php echo $ah_custom_image_slider_51_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">51</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_52 )) { ?>

              <!--========= #T52 52th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="51">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_52; ?>" alt="<?php echo $ah_custom_image_slider_52_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">52</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_53 )) { ?>

              <!--========= #T53 53th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="52">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_53; ?>" alt="<?php echo $ah_custom_image_slider_53_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">53</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_54 )) { ?>

              <!--========= #T54 54th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="53">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_54; ?>" alt="<?php echo $ah_custom_image_slider_54_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">54</p>
                </div>
                </a>
              </div>
              <?php } ?>
              
              </div><!-- /.row -->
            </div><!-- /.item -->
        
          <?php } if (!empty( $ah_custom_image_slider_55 )) { ?>
        
              <!--*_*_*_ ITEM TEN  _*_*_*-->
            
              <div class="item">
                <div class="row">
                
                <!--========= #T55 55th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="54">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_55; ?>" alt="<?php echo $ah_custom_image_slider_55_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">55</p>
                </div>
                </a>
              </div>

           <?php if (!empty( $ah_custom_image_slider_56 )) { ?>

              <!--========= #T56 56th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="55">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_56; ?>" alt="<?php echo $ah_custom_image_slider_56_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">56</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_57 )) { ?>

              <!--========= #T57 57th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="56">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_57; ?>" alt="<?php echo $ah_custom_image_slider_57_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">57</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_58 )) { ?>

              <!--========= #T58 58th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="57">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_58; ?>" alt="<?php echo $ah_custom_image_slider_58_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">58</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_59 )) { ?>

              <!--========= #T59 59th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="58">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_59; ?>" alt="<?php echo $ah_custom_image_slider_59_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">59</p>
                </div>
                </a>
              </div>
              
          <?php } if (!empty( $ah_custom_image_slider_60 )) { ?>

              <!--========= #T60 60th slide =========-->
              <div class="col-xs-4 col-sm-2 col-md-2 range_slides_item_image" data-target="#thumbnail_image_carousel" data-slide-to="59">

                <a href="#">
                  <img src="<?php echo $ah_custom_image_slider_60; ?>" alt="<?php echo $ah_custom_image_slider_60_alt; ?>" /> 
                <div class="thumbnailcarousel carousel-caption">
                  <p class="slide-number">60</p>
                </div>
                </a>
              </div>
              <?php } ?>
              
              </div><!-- /.row -->
            </div><!-- /.item -->
            <?php } ?>
            
       <!--======= Navigation Buttons =========-->

				<!--======= Left Button =========-->

				<a class="left carousel-control range_slides_carousel_control_left" href="#range_slides_6_columns_carousel" role="button" data-slide="prev">
					<span class="fa fa-chevron-left range_slides_carousel_control_icons" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
          </a>
				

				<!--======= Right Button =========-->

				<a class="right carousel-control range_slides_carousel_control_right" href="#range_slides_6_columns_carousel" role="button" data-slide="next">
					<span class="fa fa-chevron-right range_slides_carousel_control_icons" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
          </a>
				
  
    </div>
  </div> <!--*-*-*-*-*-*-*-*-*-*- END BOOTSTRAP CAROUSEL *-*-*-*-*-*-*-*-*-*-->
  
  <?php } //if container. If image one isn't loaed, the slider won't show. ?>
  

