---
category: Vue 3
tags:
  - vue 3
  - türkçe
date: 2022-01-19
title: Vue 3 CLI Projelerinde Port Adresi Değiştirme 
vssue: false
---
# Vue 3 CLI Projelerinde Port Adresi Değiştirme

Vue cli ile oluşturduğunuz projeler npm run serve komutu ile localhost:8080' üzerinde çalışmaya başlıyor. Eğer bu port üzerinde başka bir proje çalışıyorsa yeni projeyi localhost:8080'e +1 ekleyerek açıyor. 8081, 8082 diye devam ediyor.

Küçük bir ayarla projenizin çalışmasını istediğiniz portu belirleyebiliyorsunuz.

Bu adresi değiştirmek için yapmanız gereken çok basit.
Projenizin kök klasöründe vue.config.js adlı bir dosya oluşturun. 

> 
module.exports = {
    devServer: {
        port: 7777
    }
}
>
yukarıdaki kodu ekleyin ve portu belirleyin. Projeniz artık localhost:7777 üzerinde çalışacak.