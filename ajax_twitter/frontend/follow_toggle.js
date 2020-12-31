class FollowToggle{
    constructor(el){
        this.$el = $(el)
        this.userId = this.$el.data('user-id')
        this.followState = this.$el.data('initial-follow-state')
        this.render()
    }

    render(){
        if (this.followState === "unfollowed") {
            this.$el.text("Follow!")
        } else if(this.followState === "followed") {
            this.$el.text("Unfollow!")
        }
    }

    handleClick(){
        this.$el.on('submit', e => {e.preventDefault();})

       const ajaxObject = $.ajax({
            method: this.followState === "unfollowed" ? "POST" : "DELETE",
            url: '/users/:id/follow',
            dataType: 'json'
        })

        if (this.followState === "unfollowed") {
            this.$el.text("Follow!")
        } else if(this.followState === "followed") {
            this.$el.text("Unfollow!")
        }

    }
}

module.exports = FollowToggle;