<template>
  <!-- using this embedder: https://1map.com/map-embed -->
  <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3" class="w-full h-full">
    <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
    <script>
      ;(function () {
        var setting = {
          height: 540,
          width: '100%',
          zoom: 17,
          queryString: '407 Northeast 12th Avenue, Portland, OR, USA',
          place_id: 'ChIJISv5PLCglVQRyJ0bh6G4D5Y',
          satellite: false,
          centerCoord: [45.525979816174576, -122.6539107],
          cid: '0x960fb8a1871b9dc8',
          lang: 'en',
          cityUrl: '/us/or/portland',
          cityAnchorText: 'Map of Portland, Oregon, United States',
          id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
          embed_id: '518111',
        }
        var d = document
        var s = d.createElement('script')
        s.src = 'https://1map.com/js/script-for-user.js?embed_id=518111'
        s.async = true
        s.onload = function (e) {
          window.OneMap.initMap(setting)
        }
        var to = d.getElementsByTagName('script')[0]
        to.parentNode.insertBefore(s, to)
      })()
    </script>
  </div>
</template>
