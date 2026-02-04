---
title: "Resaltar filas de una tabla con Bootstrap"
description: "Descubre cómo resaltar filas de una tabla con Bootstrap y mejora la experiencia visual de tus datos. Aprende a implementar el efecto hover fácilmente."
date: 2015-08-12
updatedDate: 2026-02-02
tags: ["table","class","table-hover"]
slug: bootstrap/tablas/resaltar-filas-de-una-tabla-con-bootstrap
type: doc
topic: bootstrap
id: 199baedd-1501-48bd-8f89-b8937390bfcd
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/tablas/filas-resaltadas.html
---

Uno de los efectos que podemos asignar a una tabla es el de resaltar las filas cuando pasemos con el cursor sobre ellas, realizando una iluminación de las mismas. Así que aquí vamos a ver como podemos resaltar filas de una tabla con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Crear una tabla básica


Lo primero que necesitamos es definir una tabla. Para ello utilizamos el siguiente [código HTML](https://www.manualweb.net/html/):


```html
<table class="table">
  <thead>
    <tr>
      <th>País</th>
      <th>Capital</th>
      <th>Superficie</th>
      <th>Habitantes</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>España</td>
      <td>Madrid</td>
      <td>504.645 km<sup>2</sup></td>
      <td>46,6 M</td>
      <td>España, también denominado Reino de España...</td>
    </tr>
  </tbody>
</table>
```


## Aplicar el efecto hover


Lo último que vamos a ver es como poder resaltar filas de una tabla con [Bootstrap](http://www.manualweb.net/bootstrap/). Esto lo conseguimos mediante la clase `table-hover`. Lo que tenemos que hacer es incluir esta clase además de la anterior clase `table` ya añadida:


```html
<table class="table table-hover">
  <thead>
    <tr>
      <th>País</th>
      <th>Capital</th>
      <th>Superficie</th>
      <th>Habitantes</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>España</td>
      <td>Madrid</td>
      <td>504.645 km<sup>2</sup></td>
      <td>46,6 M</td>
      <td>España, también denominado Reino de España, es un país soberano, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio está organizado en diecisiete comunidades autónomas y dos ciudades autónomas, además de cincuenta provincias. Su capital es la villa de Madrid.</td>
    </tr>
    <tr>
      <td>Italia</td>
      <td>Roma</td>
      <td>301.338 km<sup>2</sup></td>
      <td>60,7 M</td>
      <td>Italia, oficialmente la República Italiana (en italiano: Repubblica Italiana), es un país soberano miembro de la Unión Europea. Es un país bicontinental; su territorio está en Europa del Sur y en el norte de África; su territorio europeo (99,97%) lo conforma la península itálica, el valle del Po y dos grandes islas en el mar Mediterráneo: Sicilia y Cerdeña; el territorio africano (0.03%) lo conforman las islas de Lampedusa, Lampione y Pantelaria.</td>
    </tr>
    <tr>
      <td>Francia</td>
      <td>París</td>
      <td>675.417 km<sup>2</sup></td>
      <td>66 M</td>
      <td>Francia, oficialmente República Francesa, es un país soberano, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la república semipresidencialista. Su territorio, con capital en París, se extiende sobre una superficie total de 675 417 km² y el 1 de enero de 2015 contaba con 66.3 millones de habitantes, 64.2 millones en la Francia metropolitana y 2.1 millones en los cinco departamentos de ultramar.</td>
    </tr>
    <tr>
      <td>Grecia</td>
      <td>Atenas</td>
      <td>131.990 km<sup>2</sup></td>
      <td>10,7 M</td>
      <td>Grecia, oficialmente República Helénica, es un país soberano, miembro de la Unión Europea. En el país viven alrededor de once millones de habitantes que conforman una sociedad muy homogénea, donde la mayoría habla el idioma griego y practica el cristianismo ortodoxo. Atenas, la capital, es la ciudad más poblada del país. Otras ciudades como Salónica, El Pireo, Patras, Heraclión y Lárisa, son centros políticos, económicos y culturales a nivel regional.</td>
    </tr>
    <tr>
      <td>Alemania</td>
      <td>Berlin</td>
      <td>357.168 km<sup>2</sup></td>
      <td>81,2 M</td>
      <td>Alemania, oficialmente la República Federal de Alemania, es un país soberano centroeuropeo y miembro de la Unión Europea; se organiza como una república parlamentaria federal y su capital es Berlín. Su territorio, formado por dieciséis Bundesländer, limita al norte con el mar del Norte, Dinamarca y el mar Báltico; al este con Polonia y la República Checa; al sur con Austria y Suiza, y al oeste con Francia, Luxemburgo, Bélgica y los Países Bajos.</td>
    </tr>
  </tbody>
</table>
```

