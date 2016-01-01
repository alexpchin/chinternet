---
layout: page
title: Tutorials
permalink: /tutorials/
---

<div class="card-columns">
  {% for post in site.posts %}
    {% if post.categories contains 'tutorial' %}
      <div class="card card-block text-xs-center">
        <iframe width="100%" height="150" src="https://www.youtube.com/embed/{{ post.youtube_id }}" frameborder="0" allowfullscreen></iframe>
        <h4 class="card-title">{{ post.title }}</h4>
        <p class="card-text">{{ post.description }}</p>
        <p class="card-text"><small class="text-muted">{{ post.date | date: "%b %-d, %Y" }}</small></p>
      </div>
    {% endif %}
  {% endfor %}
</div>
