const API = 'https://www.reddit.com';

export const apiCall = {
    fetchPosts(subreddit) {
        //fetching the home post API 
        return fetch(`${API}${subreddit}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                console.log('completedAPICall');

                // Should set the state here or update the store here. 

                //console.log(jsonResponse.data.children);
                //let string = JSON.stringify(jsonResponse.data.children[1]);
                //console.log(string);
                return jsonResponse; //returning an Array of Posts
            })
    },
    fetchComments(permalink) {
        //fetching the home post API 
        return fetch(`${API}${permalink}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    return [];
                }
                console.log('completedAPICall');
                return jsonResponse[1].data.children; // returning array of comments
            })
    }
}

export const frontPage = apiCall.fetchPosts('/r/popular');