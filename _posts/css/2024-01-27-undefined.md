---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CDEBPY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDd%2BnSBMPw9Q4I8%2B%2F%2BYQLMuvokpICcEFOjM8mZn36dHvAIhAOpffvSISF1oMg53g1PkXlREejcEOibR%2F3HrSaSBDKKuKv8DCC4QABoMNjM3NDIzMTgzODA1IgxJ%2F0D%2BMd%2BaANIOVrcq3ANhHk9QZNehcr8uoicSZDDv6ImLYhOgt8udUOeEwbF2LzSwqmzCn%2FxnkZoPQrsRA79K1btbC5Kq6gYBHK%2B4KzpUdnLzkfanecRpj5%2BM4QSaJ7ZUtPh6KICC90hqzjaAdXQU30K%2FOjdveK2zInRn2bQIISK7QZEMSarrgUFBCGkKiorr1IvOq8P8A0t2fo2w7T33SRrIpSdpn9i8qZjWWq6eTpjRk5asUsi7tDiOuIG9lFPuykR28fj8x1d2zm3QuvTkel3gsBpYVoL3erxga6frM7Ws7z6nhqC%2BTTZnffNT30VgWcergVwgKT4%2FglmoelVsdxrZ1pl%2BJeDsB49rZ83SEaGAetefvIZceGRN5En6bCWbN55IKmSQpFCcYy%2F8LK8%2BdcwdA0M1ggF0iTOh%2BvaGkU30478jcv4nrlfacwY9s2SgDHXw6t2fDLrTg72TmrQepP1Gz8%2Frnr9Q1lPzK8%2FKED4yrBCeX22xQaG5dlSFp8U9HPpEp0xb9jWjb7rpDlo8JqxwCRgO%2BfkOqYLirF4ILs41xxw%2BIGSFs5C%2BNjSeVFbwer5pYFUh8D53MV1%2B4s%2F4gfH4Z2cVnSkXMPD7NyJvNRmmY0Bb%2FGeZfuAL5Uz42RdMY01w9mB4FK0YKTDd6cDJBjqkASQcp%2B8HIQYcVPhfDEpB%2Bshdqa3QtF1dWIz57w8UfitgxNLuIdGdHpE6QQucmE%2Bf510ykpYPcy6yh8BW%2Bs2E2EZ8LOhGO6ZwsPXoUbHwkg6HM2of2B8Qo9fAQLaBd052RfYdSK%2FxMZrm2M8ZiO%2BFvgRpNX%2FxoQV89Ad2QQRnUS%2FCQeWDHUsQpjMwGnXIlPRafrcgJ4LoKLjNF%2BiZATM4z%2BWlkUya&X-Amz-Signature=471096eeaf88aeae197718a01e27689a06b6ab6a49d2424a746c44146ee2ceef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CDEBPY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDd%2BnSBMPw9Q4I8%2B%2F%2BYQLMuvokpICcEFOjM8mZn36dHvAIhAOpffvSISF1oMg53g1PkXlREejcEOibR%2F3HrSaSBDKKuKv8DCC4QABoMNjM3NDIzMTgzODA1IgxJ%2F0D%2BMd%2BaANIOVrcq3ANhHk9QZNehcr8uoicSZDDv6ImLYhOgt8udUOeEwbF2LzSwqmzCn%2FxnkZoPQrsRA79K1btbC5Kq6gYBHK%2B4KzpUdnLzkfanecRpj5%2BM4QSaJ7ZUtPh6KICC90hqzjaAdXQU30K%2FOjdveK2zInRn2bQIISK7QZEMSarrgUFBCGkKiorr1IvOq8P8A0t2fo2w7T33SRrIpSdpn9i8qZjWWq6eTpjRk5asUsi7tDiOuIG9lFPuykR28fj8x1d2zm3QuvTkel3gsBpYVoL3erxga6frM7Ws7z6nhqC%2BTTZnffNT30VgWcergVwgKT4%2FglmoelVsdxrZ1pl%2BJeDsB49rZ83SEaGAetefvIZceGRN5En6bCWbN55IKmSQpFCcYy%2F8LK8%2BdcwdA0M1ggF0iTOh%2BvaGkU30478jcv4nrlfacwY9s2SgDHXw6t2fDLrTg72TmrQepP1Gz8%2Frnr9Q1lPzK8%2FKED4yrBCeX22xQaG5dlSFp8U9HPpEp0xb9jWjb7rpDlo8JqxwCRgO%2BfkOqYLirF4ILs41xxw%2BIGSFs5C%2BNjSeVFbwer5pYFUh8D53MV1%2B4s%2F4gfH4Z2cVnSkXMPD7NyJvNRmmY0Bb%2FGeZfuAL5Uz42RdMY01w9mB4FK0YKTDd6cDJBjqkASQcp%2B8HIQYcVPhfDEpB%2Bshdqa3QtF1dWIz57w8UfitgxNLuIdGdHpE6QQucmE%2Bf510ykpYPcy6yh8BW%2Bs2E2EZ8LOhGO6ZwsPXoUbHwkg6HM2of2B8Qo9fAQLaBd052RfYdSK%2FxMZrm2M8ZiO%2BFvgRpNX%2FxoQV89Ad2QQRnUS%2FCQeWDHUsQpjMwGnXIlPRafrcgJ4LoKLjNF%2BiZATM4z%2BWlkUya&X-Amz-Signature=32be779b943bda790cb4ff5584be2f6ebec29eda2c859558c57d781ac5fed55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

