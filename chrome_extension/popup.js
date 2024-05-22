document.addEventListener('DOMContentLoaded', function() {
    const allBtn = document.getElementById('allBtn');
    const unreadBtn = document.getElementById('unreadBtn');
    const awaitingReplyBtn = document.getElementById('awaitingReplyBtn');
    const needsReplyBtn = document.getElementById('needsReplyBtn');

    allBtn.addEventListener('click', function() {
        filterChats('all');
    });

    unreadBtn.addEventListener('click', function() {
        filterChats('unread');
    });

    awaitingReplyBtn.addEventListener('click', function() {
        filterChats('awaitingReply');
    });

    needsReplyBtn.addEventListener('click', function() {
        filterChats('needsReply');
    });

    function filterChats(filterType) {
        console.log(`Filtering chats by ${filterType}`);
    }

    const leadBtn = document.getElementById('leadBtn');
    const friendsBtn = document.getElementById('friendsBtn');
    const businessBtn = document.getElementById('businessBtn');

    leadBtn.addEventListener('click', function() {
        applyCustomFilter('lead');
    });

    friendsBtn.addEventListener('click', function() {
        applyCustomFilter('friends');
    });

    businessBtn.addEventListener('click', function() {
        applyCustomFilter('business');
    });

    // Function to apply custom filters
    function applyCustomFilter(filterName) {
        // Logic to apply custom filter
        console.log(`Applying custom filter: ${filterName}`);
    }
});