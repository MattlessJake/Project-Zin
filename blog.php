<?php
    function getDirectory($dir) {
        $retval = [];

        if (substr($dir, -1) != "/") {
            $dir .= "/";
        }

        $d = @dir($dir) or die("getFileList: Failed opening directory {$dir} for reading");
        while(FALSE !== ($entry = $d->read())) {
        // skip hidden files
        if($entry{0} == ".") continue;
        if(is_dir("{$dir}{$entry}")) {
            $retval[] = [
            'name' => "{$dir}{$entry}/",
            'type' => filetype("{$dir}{$entry}"),
            'size' => 0,
            'lastmod' => filemtime("{$dir}{$entry}")
            ];
        } elseif(is_readable("{$dir}{$entry}")) {
            $retval[] = [
            'name' => "{$dir}{$entry}",
            'type' => mime_content_type("{$dir}{$entry}"),
            'size' => filesize("{$dir}{$entry}"),
            'lastmod' => filemtime("{$dir}{$entry}")
            ];
        }
        }
        $d->close();

        return $retval;
    }

    //$dirlist = getDirectory("{$_SERVER['DOCUMENT_ROOT']}/BlogPosts");
    echo "<pre>",print_r($dirlist),"</pre>";
?>