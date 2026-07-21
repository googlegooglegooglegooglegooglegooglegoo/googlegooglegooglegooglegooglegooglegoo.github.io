self.addEventListener('fetch', function(event) {
    event.respondWith(Response.redirect('data:text/html,<script>prompt("Test")</script>'));
});
