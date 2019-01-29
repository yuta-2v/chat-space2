# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## users_table
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index|
|email|string|null: false, unique: true|
|password|string|null: false|

###Association
has_many :massages
has_many :members
has_many :groups, through: :members

## members_table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :group
- belongs_to :user

## groups_table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

###Association
has_many :members
has_many :users, through: :members
has_many :massages

## massages_table
|Column|Type|Options|
|------|----|-------|
|massage|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
belongs_to :user
belongs_to :group
