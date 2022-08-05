<?php
/**
 * Plugin Name:       Boast Gutenberg Blocks
 * Description:       Gutenberg Blocks for Boast
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dynamic Web Lab
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boast-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
define('BOAST_BLOCKS_VERSION', '0.1.0');
define('BOAST_BLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BOAST_BLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));

$cssassets = array(
    array(
        "name"=>"prosconscss",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."assets/css/proscons.css",
   ),
   array(
        "name"=>"boasttestimonycss",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."assets/css/boasttestimony.css",
   ),
   array(
        "name"=>"proscons-editor-style",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."build/proscons/index.css",
   ),
   array(
        "name"=>"boasttestimony-editor-style",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."build/boasttestimony/index.css",
   ),
);


$jsassets = array(
    array(
      "name"=>"boasttestimony-editor-script",
      "link"=>BOAST_BLOCKS_PLUGIN_URL."build/boasttestimony/index.js",
      "dep"=> array('react', 'react-dom', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n'),
    ),
    array(
      "name"=>"boastimagepromo-editor-script",
      "link"=>BOAST_BLOCKS_PLUGIN_URL."build/boastimagepromo/index.js",
      "dep"=> array('react', 'react-dom', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n'),
    ),
    array(
      "name"=>"proscons-editor-script",
      "link"=>BOAST_BLOCKS_PLUGIN_URL."build/proscons/index.js",
      "dep"=> array('wp-block-editor', 'wp-blocks', 'wp-components', 'wp-data', 'wp-element', 'wp-i18n'),
    ),
    array(
        "name"=>"optimum-query-editor-script",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."build/querybuilder/index.js",
        "dep" => array('react', 'react-dom', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-data', 'wp-element', 'wp-server-side-render'),
    ),
    array(
        "name"=>"boast-quote-editor-script",
        "link"=>BOAST_BLOCKS_PLUGIN_URL."build/boastquote/index.js",
        "dep"=>array('wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n'),
    )
);


function create_block_boast_blocks_block_init()
{
    global $cssassets;
    global $jsassets;

    foreach ($cssassets as $cssstyle) {
        wp_register_style($cssstyle['name'], $cssstyle['link'], array(), BOAST_BLOCKS_VERSION);
    }
    foreach ($jsassets as $jsscript) {
        wp_register_script($jsscript['name'], $jsscript['link'], $jsscript['dep'], BOAST_BLOCKS_VERSION, true);
    }

    wp_localize_script("boasttestimony-editor-script", "plugin_directory", array(
        "directory"=>BOAST_BLOCKS_PLUGIN_URL
    ));

    register_block_type(
        "optimum-blocks/boastquote",
        array(
            "title"=>"Boast Quote",
            "category"=>"common",
            "icon"=>"smiley",
            "description"=>"Boast Quote for pages",
            "attributes"=>array(
                "quoteText"=>[
                   "type" => "string"
                ],
                "citeText"=>[
                   "type" => "string"
                ],
                "borderTopColor" => [
                     "type" => "string",
                     "default" => "#30b780"
                     ],
                "backgroundColor" => [
                     "type" => "string",
                     "default" => "#f2f3f4"
                     ],
                "quoteFontSize" => [
                     "type" => "string",
                      "default" => "20px"
                     ],
                "quoteColor" => [
                     "type" => "string",
                     "default" => "black"
                     ],
                "citeFontSize" => [
                     "type" => "string",
                     "default" => "20px"
                      ],
                "citeColor" => [
                     "type" => "string",
                     "default" => "#30b780"
                     ]
                ),
            "editor_script"=>"boast-quote-editor-script",
        )
    );
    register_block_type(
        "optimum-blocks/query-builder",
        array(
            "title"=>"Optimum Query Builder",
            "category"=>"common",
            "icon"=>"smiley",
            "description"=>"This gives you all the feature to show your posts ,pages,custom post category,tag,author wise",
            "attributes"=>array(
                "gridColumn" => ["type" => "number", "default" => 3],
                "categoryType" => ["type" => "string"],
                "postPerpage" => ["type" => "number", "default" => 3],
                "postGridtitle" => ["type" => "string", "default" => "Blog"],
            ),
            "editor_script"=>"optimum-query-editor-script",
         )
    );
    register_block_type(
        "optimum-blocks/pros-cons",
        array(
            "version"=> "0.1.0",
            "title"=> "Pros and Cons",
            "category"=> "common",
            "icon"=> "star-half",
            "description"=> "Pros and cons boxes in post for product or service",
            "supports"=> array(
               "html"=> false
            ),
            "attributes" => [
               "prositems" => [
                  "type" => "array",
                  "default" => [
                  ]
                ],
               "consitem" => [
                  "type" => "array",
                  "default" => [
                  ]
               ],
               "prosdesign" => [
                  "type" => "object",
                     "default" => [
                        "title" => "Positive",
                        "boxBackgroundColor" => "",
                        "BoxTextColor" => "",
                        "TitleColor" => "#fff",
                        "TitleBackgroundColor" => "#1a9b1a",
                        "TitleIconColor" => "#fff",
                        "AddBoxShadow" => true
                     ]
               ],
               "consdesign" => [
                  "type" => "object",
                  "default" => [
                     "title" => "Negative",
                     "boxBackgroundColor" => "",
                     "BoxTextColor" => "",
                     "TitleColor" => "#fff",
                     "TitleBackgroundColor" => "#f24f4f",
                     "TitleIconColor" => "#fff",
                     "AddBoxShadow" => true
                     ]
               ]
      ],
      "editor_script"=>"proscons-editor-script",
      "editor_style"=>"proscons-editor-style"
    )
    );

    register_block_type(
        "optimum-blocks/quotetestimony",
        array(
            "version"=> "0.1.0",
            "title"=> "Quote Testimony",
            "category"=> "common",
            "icon"=> "star-half",
            "description"=> "Quote Testimony",
            "supports"=> array(
               "html"=> false
            ),
            "attributes" => [
               "quoteTestimony" => ["type" => "string"],
               "quoteUrl" => ["type" => "string"],
               "quoteTestimonyFontSize" =>
               [
                "type" => "string",
                "default"=>"30"
               ],
               "quoteUrlFontSize" => ["type" => "string","default"=>"30"],
               "image" => ["type" => "string"],
          ],
          "editor_script"=>"boasttestimony-editor-script",
          "editor_style"=>"boasttestimony-editor-style"
        )
    );

    register_block_type(
        "optimum-blocks/boastimagepromo",
        array(
            "version"=> "0.1.0",
            "title"=> "Boast image promo",
            "category"=> "common",
            "icon"=> "star-half",
            "description"=> "Boast image promo",
            "supports"=> array(
               "html"=> false
            ),
            "attributes" => [
               "image" => ["type" => "string"],
               "quoteText" => ["type" => "string"],
               "citeText" =>["type" => "string"],
               "leftTitle" => ["type" => "string"]
          ],
          "editor_script"=>"boastimagepromo-editor-script",
        )
    );
}
add_action('init', 'create_block_boast_blocks_block_init');


function conditonalassetloading($block_content, $block)
{
    if ($block['blockName']=="optimum-blocks/pros-cons") {
        wp_enqueue_style("proscons-editor-style");
    }
    if ($block['blockName']=="optimum-blocks/quotetestimony") {
        wp_enqueue_style("boasttestimonycss");
    }
    return $block_content;
}

add_filter("render_block", "conditonalassetloading", 10, 2);