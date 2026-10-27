---
title: "Ajustar un SVG al contenedor con preserveAspectRatio - meet frente a slice"
description: "Aprende a usar preserveAspectRatio en SVG con viewBox y compara meet y slice para mostrar todo el dibujo o llenar el contenedor sin deformarlo."
date: 2026-10-27
updatedDate: 2026-10-27
tags: ["svg","preserve","aspect-ratio","css","responsive"]
slug: svg/basicos/ajustar-un-svg-al-contenedor-con-preserveaspectratio-meet-frente-a-slice
type: doc
topic: svg
id: 8a58552e-e4d6-4d76-9ca0-ef51d61d5d62
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_svg/blob/master/basico/ajustar-svg-contenedor.html
---

Cuando un [SVG](https://lineadecodigo.com/svg/) se muestra en un espacio cuyas proporciones no coinciden con las del dibujo, hay que decidir entre conservarlo completo o cubrir todo el contenedor aunque se recorten sus bordes. En nuestro ejemplo usamos `preserveAspectRatio` para comparar `meet` y `slice`, y lo relacionamos con `viewBox`.


## Por qué manejar preserveAspectRatio en SVG


El objetivo que perseguimos es el de mostrar el mismo dibujo dentro de un contenedor rectangular sin deformarlo. La caja del ejemplo mide 400 píxeles de ancho y 150 de alto, mientras que el sistema de coordenadas del SVG es cuadrado, de 100 por 100. Si se forzara el dibujo a ocupar esas dos dimensiones sin conservar la proporción, el círculo y el rectángulo dejarían de mantener su forma.


La clase `.caja` fija las dimensiones del contenedor y oculta cualquier parte que sobresalga. La regla aplicada al elemento `svg` hace que cada gráfico ocupe el ancho y el alto disponibles:


```html
<style>
  /* Contenedor rectangular estirado para forzar la distorsión */
  .caja {
      width: 400px;
      height: 150px;
      border: 3px dashed #333;
      margin-bottom: 20px;
      background-color: #fff;
      overflow: hidden; /* Importante para que 'slice' no se desborde visualmente en la web */
  }        
  svg { width: 100%; height: 100%; display: block; }
</style>
```


La diferencia entre la proporción de la caja y la del `viewBox` permite comparar las dos estrategias de `preserveAspectRatio`. En el caso del valor `meet` muestra todo el contenido, mientras que el valor `slice` llena el espacio disponible, aunque tenga que recortarlo.


## Definir un viewport y el viewBox


Antes de escalar el dibujo tenemos que distinguir dos conceptos. El viewport es el espacio visible que ocupa el elemento `svg` en la página; aquí sus dimensiones se heredan del contenedor mediante `width: 100%` y `height: 100%`. El `viewBox` define el sistema de coordenadas interno con el que se dibujan las formas.


El `viewBox` que vamos a utilizar en el ejemplo mide 100 unidades de ancho por 100 de alto y contiene un rectángulo, un círculo y un texto. Las coordenadas de las figuras no dependen directamente de los 400 por 150 píxeles del contenedor:


```html
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <rect width="100" height="100" fill="" rx="10"/>
    <circle cx="50" cy="50" r="40" fill="" />
    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">SVG</text>
</svg>
```


Los cuatro valores de `viewBox` representan el origen horizontal, el origen vertical, la anchura y la altura del sistema de coordenadas. Por eso el rectángulo ocupa las 100 unidades disponibles, el centro del círculo está en `(50, 50)` y el texto se sitúa alrededor de esa zona central.


## Para qué nos sirve preserveAspectRatio y xMidYMid


Una vez definido el sistema de coordenadas, `preserveAspectRatio` determina cómo se adapta al viewport. Su valor combina una alineación y una regla de escalado. En el código, `xMidYMid` centra el `viewBox` horizontal y verticalmente cuando las proporciones del dibujo y del contenedor no coinciden.


La segunda parte del valor define el resultado visual. En la primera caja se usa `meet`:


```html
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
```


En la segunda se usa `slice`:


```html
<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
```


Al mantener `xMidYMid` en ambos casos, el dibujo permanece centrado y la comparación se limita a la forma de ajustar su escala al contenedor: `meet` o `slice`.


## Mostrar el contenido completo con meet


Cuando la prioridad es que todas las figuras sean visibles, `meet` escala el `viewBox` hasta que quepa por completo en el viewport, manteniendo su proporción. Como la caja es más ancha que alta y el dibujo parte de un cuadrado, quedará espacio libre en uno de los ejes. Ese espacio es preferible a deformar o cortar el contenido.


El código que usamos con la propiedad `meet` quedaría de la siguiente forma:


```html
<h2>meet</h2>
<div class="caja meet">
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <rect width="100" height="100" fill="" rx="10"/>
        <circle cx="50" cy="50" r="40" fill="" />
        <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">SVG</text>
    </svg>
</div>
```


El rectángulo o `rect`, el círculo o `circle` y el texto o `text` comparten la misma transformación. Al conservarse la relación entre anchura y altura, el círculo no se convierte en una elipse y el contenido completo permanece dentro del área visible.


## Cortar el contenido mediante slice


Si el SVG debe cubrir todo el contenedor, `slice` escala el dibujo hasta cubrir por completo el viewport, aunque una parte del `viewBox` quede fuera. El dibujo cuadrado y la caja apaisada tienen proporciones distintas, así que el excedente se recorta. La propiedad `overflow: hidden` de `.caja` evita que se vea fuera de sus límites.


En este caso, el código nos conserva las figuras y las coordenadas, pero cambia la forma de ajuste:


```html
<h2>slice</h2>
<div class="caja slice">                
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <rect width="100" height="100" fill="" rx="10"/>
        <circle cx="50" cy="50" r="40" fill="" />
        <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">SVG</text>
    </svg>
</div>
```


La elección entre `meet` y `slice` depende del objetivo visual: el primero favorece la visibilidad completa y el segundo la cobertura total de la caja. En ambos casos se mantiene la proporción porque el valor de `preserveAspectRatio` no utiliza `none`.


## Ejemplo completo del preserveAspectRatio en SVG


Vamos a ver cómo nos quedaría el ejemplo completo del preserveAspectRatio en SVG. Para ello, el archivo combina los estilos del contenedor y las dos variantes de `preserveAspectRatio`. Así se pueden comparar `meet` y `slice` sin cambiar el dibujo, el `viewBox` ni la alineación `xMidYMid`; solo cambia la regla de escalado.


Este es el código completo del ejemplo:


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajustar SVG al Contenedor</title>
    <style>
        /* Contenedor rectangular estirado para forzar la distorsión */
        .caja {
            width: 400px;
            height: 150px;
            border: 3px dashed #333;
            margin-bottom: 20px;
            background-color: #fff;
            overflow: hidden; /* Importante para que 'slice' no se desborde visualmente en la web */
        }        
        svg { width: 100%; height: 100%; display: block; }
    </style>
</head>
<body>
    <h1>Ajustar SVG al Contenedor</h1>
    
        <div class="contenedor">
            
            <h2>meet</h2>
            <div class="caja meet">
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <rect width="100" height="100" fill="" rx="10"/>
                    <circle cx="50" cy="50" r="40" fill="" />
                    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">SVG</text>
                </svg>
            </div>

            
            <h2>slice</h2>
            <div class="caja slice">                
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <rect width="100" height="100" fill="" rx="10"/>
                    <circle cx="50" cy="50" r="40" fill="" />
                    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">SVG</text>
                </svg>
            </div>
        </div>
    
    

</body>
</html>
```


Como todos los ejemplos de Línea de Código lo tienes disponible en GitHub para consultar el código fuente completo. La combinación de `preserveAspectRatio`, `viewBox`, `xMidYMid`, `meet` y `slice` permite elegir entre mostrar todo el dibujo o llenar el contenedor recortando el excedente.


Espero que te sea de utilidad cuando estés manejando [ejemplos en SVG](https://lineadecodigo.com/svg/).

