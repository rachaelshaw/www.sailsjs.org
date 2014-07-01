/**
 * Module dependencies
 */

var Github = require('github');
var switchback = require('node-switchback');


// Constants
var _3HOURS = 1000 * 60 * 60 * 3;

module.exports = {

  // identity: 'getgithubrepoactivity',

  inputs: {
    repo: {
      type: 'string'
    },
    user: {
      type: 'string'
    }
  },

  exits: {
    error: {
      example: {
        "message": "Not Found",
        "documentation_url": "https://developer.github.com/v3"
      }
    },
    success: [{
      "id": "2103004954",
      "type": "IssueCommentEvent",
      "actor": {
        "id": 209589,
        "login": "kschluter",
        "gravatar_id": "0c876938b33d7e8a37c3e1aa9f6272e7",
        "url": "https://api.github.com/users/kschluter",
        "avatar_url": "https://avatars.githubusercontent.com/u/209589?"
      },
      "repo": {
        "id": 3757512,
        "name": "balderdashy/sails",
        "url": "https://api.github.com/repos/balderdashy/sails"
      },
      "payload": {
        "action": "created",
        "issue": {
          "url": "https://api.github.com/repos/balderdashy/sails/issues/124",
          "labels_url": "https://api.github.com/repos/balderdashy/sails/issues/124/labels{/name}",
          "comments_url": "https://api.github.com/repos/balderdashy/sails/issues/124/comments",
          "events_url": "https://api.github.com/repos/balderdashy/sails/issues/124/events",
          "html_url": "https://github.com/balderdashy/sails/issues/124",
          "id": 11091089,
          "number": 124,
          "title": "Associations",
          "user": {
            "login": "mikermcneil",
            "id": 618009,
            "avatar_url": "https://avatars.githubusercontent.com/u/618009?",
            "gravatar_id": "199046437b76e6ca73e00b4cc182a1c5",
            "url": "https://api.github.com/users/mikermcneil",
            "html_url": "https://github.com/mikermcneil",
            "followers_url": "https://api.github.com/users/mikermcneil/followers",
            "following_url": "https://api.github.com/users/mikermcneil/following{/other_user}",
            "gists_url": "https://api.github.com/users/mikermcneil/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mikermcneil/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mikermcneil/subscriptions",
            "organizations_url": "https://api.github.com/users/mikermcneil/orgs",
            "repos_url": "https://api.github.com/users/mikermcneil/repos",
            "events_url": "https://api.github.com/users/mikermcneil/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mikermcneil/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [],
          "state": "closed",
          "assignee": null,
          "milestone": {
            "url": "https://api.github.com/repos/balderdashy/sails/milestones/3",
            "labels_url": "https://api.github.com/repos/balderdashy/sails/milestones/3/labels",
            "id": 345430,
            "number": 3,
            "title": "Roadmap",
            "description": "",
            "creator": {
              "login": "mikermcneil",
              "id": 618009,
              "avatar_url": "https://avatars.githubusercontent.com/u/618009?",
              "gravatar_id": "199046437b76e6ca73e00b4cc182a1c5",
              "url": "https://api.github.com/users/mikermcneil",
              "html_url": "https://github.com/mikermcneil",
              "followers_url": "https://api.github.com/users/mikermcneil/followers",
              "following_url": "https://api.github.com/users/mikermcneil/following{/other_user}",
              "gists_url": "https://api.github.com/users/mikermcneil/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/mikermcneil/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/mikermcneil/subscriptions",
              "organizations_url": "https://api.github.com/users/mikermcneil/orgs",
              "repos_url": "https://api.github.com/users/mikermcneil/repos",
              "events_url": "https://api.github.com/users/mikermcneil/events{/privacy}",
              "received_events_url": "https://api.github.com/users/mikermcneil/received_events",
              "type": "User",
              "site_admin": false
            },
            "open_issues": 0,
            "closed_issues": 28,
            "state": "closed",
            "created_at": "2013-05-31T07:26:30Z",
            "updated_at": "2014-03-02T03:52:39Z",
            "due_on": null
          },
          "comments": 217,
          "created_at": "2013-02-17T18:12:28Z",
          "updated_at": "2014-05-16T23:05:52Z",
          "closed_at": "2014-03-02T03:45:00Z",
          "body": "## Update:\r\n\r\nSails v0.10.0-rc3 is now available on npm.\r\n\r\n> ##### Upgrading to Sails v0.10 beta:\r\n>\r\n> Install:\r\n> `$ sudo npm install -g sails@beta -g`\r\n>\r\n> Docs:\r\n> [beta.sailsjs.org](http://beta.sailsjs.org/#!documentation/reference/ModelAssociations/ModelAssociations.html)\r\n>\r\n> Also see: https://github.com/balderdashy/waterline-docs\r\n> \r\n> Migration Guide for v0.9.x apps:\r\n> https://github.com/balderdashy/sails-docs/blob/master/Migration-Guide.md\r\n>\r\n\r\n\r\nWe're working on improving docs in general, but we could really use your help- please feel free to submit pull requests to https://github.com/balderdashy/sails-docs.  The changes go live to beta.sailsjs.org (and eventually sailsjs.org proper, when we set the `latest` tag on v0.10)\r\n\r\n--\r\n\r\n\r\n<!--\r\n--------------------------------------------------------------------------------------------------\r\n\r\n--------------------------------------------------------------------------------------------------\r\n\r\n--------------------------------------------------------------------------------------------------\r\n**Original post:**\r\n\r\n# The plan\r\nBy default, standard relational semantics will be used.  \r\n\r\n# hasOne, belongsToOne\r\n\r\n## Relational\r\n\r\n### What goes in your model\r\n```\r\n// User\r\nattributes: {\r\n  name: 'STRING',\r\n  Group: {\r\n    model: 'group'\r\n  }\r\n}\r\n```\r\n\r\n### What's actually stored in the db\r\n```\r\n// User\r\n{\r\n  id: 7,\r\n  name: 'Mike',\r\n  GroupId: 381\r\n}\r\n\r\n// Group\r\n{\r\n  id: 381,\r\n  name: 'Developers'\r\n}\r\n```\r\n\r\n## Non-relational\r\n\r\n### What goes in your model\r\n```\r\n// User\r\nattributes: {\r\n  name: 'STRING',\r\n  Group: {\r\n    name: 'STRING'\r\n  }\r\n}\r\n```\r\n\r\n### what's actually stored in the db\r\n```\r\n// User\r\n{\r\n  id: 7,\r\n  name: 'Mike',\r\n  Group: {\r\n    id: 381,\r\n    name: 'Developers'\r\n  }\r\n}\r\n```\r\n\r\n-->\r\n"
        },
        "comment": {
          "url": "https://api.github.com/repos/balderdashy/sails/issues/comments/43388475",
          "html_url": "https://github.com/balderdashy/sails/issues/124#issuecomment-43388475",
          "issue_url": "https://api.github.com/repos/balderdashy/sails/issues/124",
          "id": 43388475,
          "user": {
            "login": "kschluter",
            "id": 209589,
            "avatar_url": "https://avatars.githubusercontent.com/u/209589?",
            "gravatar_id": "0c876938b33d7e8a37c3e1aa9f6272e7",
            "url": "https://api.github.com/users/kschluter",
            "html_url": "https://github.com/kschluter",
            "followers_url": "https://api.github.com/users/kschluter/followers",
            "following_url": "https://api.github.com/users/kschluter/following{/other_user}",
            "gists_url": "https://api.github.com/users/kschluter/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/kschluter/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/kschluter/subscriptions",
            "organizations_url": "https://api.github.com/users/kschluter/orgs",
            "repos_url": "https://api.github.com/users/kschluter/repos",
            "events_url": "https://api.github.com/users/kschluter/events{/privacy}",
            "received_events_url": "https://api.github.com/users/kschluter/received_events",
            "type": "User",
            "site_admin": false
          },
          "created_at": "2014-05-16T23:05:52Z",
          "updated_at": "2014-05-16T23:05:52Z",
          "body": "Associations have been available on master for a couple months now.\r\nBeta docs are here: http://beta.sailsjs.org/#!documentation\r\nAnd here: https://github.com/balderdashy/waterline-docs/blob/master/associations.md\r\n"
        }
      },
      "public": true,
      "created_at": "2014-05-16T23:05:53Z",
      "org": {
        "id": 1445252,
        "login": "balderdashy",
        "gravatar_id": "8590af9cb2eed44f7b66fed322704aeb",
        "url": "https://api.github.com/orgs/balderdashy",
        "avatar_url": "https://avatars.githubusercontent.com/u/1445252?"
      }
    }]
  },

  fn: function(opts, cb) {
    var sb = switchback(cb);

    // Cache results to avoid exceeding our github rate limit
    var _3hoursago = new Date((new Date()) - _3HOURS);
    Cache.find()
      .where({
        createdAt: {
          '>': _3hoursago
        },
        repo: opts.repo,
        user: opts.user
      })
      .sort('createdAt DESC')
      .limit(1)
      .exec({
        error: sb.error,
        success: function(cached) {
          if (cached.length) {
            return sb.success(cached[0].data);
          }

          var github = new Github({
            // required
            version: '3.0.0',
            // optional
            // debug: true,
            // protocol: 'https',
            // host: 'github.my-GHE-enabled-company.com',
            // pathPrefix: '/api/v3', // for some GHEs
            // timeout: 5000
          });

          // Authenticate (if credentials are provided) to increase
          // our rate limit.
          if (sails.config.githubusername && sails.config.githubpassword) {
            sails.log('Using provided credentials (%s / *****)',sails.config.githubusername);
            github.authenticate({
              type: 'basic',
              username: sails.config.githubusername,
              password: sails.config.githubpassword
            });
          }
          else sails.log.warn('Either `githubusername` or `githubpassword` config were not provided - sending request to Github w/ no credentials..');


          github.repos.getCommits({
            repo: opts.repo,
            user: opts.user
          }, function(err, data) {
            if (err) return sb(err);

            // Cache the result
            Cache.create({
              repo: opts.repo,
              user: opts.user,
              data: data
            }).exec(function(err) {
              if (err) return sb(err);
              return sb.success(data);
            });

          });
        },
      });

    // Chainable event emitter
    return sb;
  }

};
