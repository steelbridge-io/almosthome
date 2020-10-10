<?php
/**
 * Advanced Search Template
 *
 * @package WP Pro Real Estate 4
 * @subpackage Template
 */
 ?>

<div id="advanced-search" class="fourteen columns">
	<div id="advanced-search-inner">

        <form id="advanced_search" name="search-listings" action="<?php echo home_url(); ?>">
            
            <?php
            $layout = $ct_options['ct_homepage_adv_search']['enabled'];
            
            if ($layout) :
            
            foreach ($layout as $key=>$value) {
            
                switch($key) {
					
				// Type            
                case 'type' : ?>
                    <div class="left">
                        <label for="ct_type"><?php _e('Type', 'contempo'); ?></label>
                        <?php ct_search_form_select('property_type'); ?>
                    </div>
                <?php
				break;
				
				// City
				case 'city' : ?>
				<div class="left">
					<label for="ct_city"><?php _e('City', 'contempo'); ?></label>
					<?php ct_search_form_select('city'); ?>
				</div>
                <?php
				break;
				
                // State            
                case 'state' : ?>
                    <div class="left">
                        <label for="ct_state"><?php _e('State', 'contempo'); ?></label>
						<?php ct_search_form_select('state'); ?>
                    </div>
                <?php
				break;
				
				// Zipcode            
                case 'zipcode' : ?>
                    <div class="left">
                        <label for="ct_zipcode"><?php _e('Zipcode', 'contempo'); ?></label>
						<?php ct_search_form_select('zipcode'); ?>
                    </div>
                <?php
				break;
				
				// Beds            
                case 'beds' : ?>
                    <div class="left">
                        <label for="ct_beds"><?php _e('Beds', 'contempo'); ?></label>
						<?php ct_search_form_select('beds'); ?>
                    </div>
                <?php
				break;
				
				// Baths            
                case 'baths' : ?>
                    <div class="left">
                        <label for="ct_baths"><?php _e('Baths', 'contempo'); ?></label>
						<?php ct_search_form_select('baths'); ?>
                    </div>
                <?php
				break;
				
				// Status            
                case 'status' : ?>
                    <div class="left">
                        <label for="ct_status"><?php _e('Status', 'contempo'); ?></label>
						<?php ct_search_form_select('status'); ?>
                    </div>
                <?php
				break;
				
				// Additional Features            
                case 'additional_features' : ?>
                    <div class="left">
                        <label for="ct_additional_features"><?php _e('Addtional Features', 'contempo'); ?></label>
						<?php ct_search_form_select('additional_features'); ?>
                    </div>
                <?php
				break;
				
				// Price From            
                case 'price_from' : ?>
                    <div class="left">
                        <label for="ct_price_from"><?php _e('Price From', 'contempo'); ?> (<?php currency(); ?>)</label>
                        <input type="text" id="ct_price_from" class="number" name="ct_price_from" size="8" />
                    </div>
                <?php
				break;
				
				// Price To            
                case 'price_to' : ?>
                    <div class="left">
                        <label for="ct_price_to"><?php _e('Price To', 'contempo'); ?> (<?php currency(); ?>)</label>
                        <input type="text" id="ct_price_to" class="number" name="ct_price_to" size="8" />
                    </div>
                <?php
				break;
				
				// MLS            
                case 'mls' : ?>
                    <div class="left">
                        <label for="ct_mls"><?php _e('MLS #', 'contempo'); ?></label>
                        <input type="text" id="ct_mls" name="ct_mls" size="12" />
                    </div>
                <?php
				break;

                }
            
            } endif; ?>
            
            <input type="hidden" name="search-listings" value="true" />
            <input id="submit" class="btn right marT20" type="submit" value="<?php _e('Search', 'contempo'); ?>" />
            
                <div class="clear"></div>
            
        </form>

    </div>
</div>