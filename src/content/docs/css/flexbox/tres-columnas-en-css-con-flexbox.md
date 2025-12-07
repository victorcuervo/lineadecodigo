---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZD54LF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2x0Oib2jCRI9USSPHxPH682ccOrvvYeYdCUm2KLNmFAiArcjwkcS7ALpzyaAhNSF3lAM7JsB7df0R6p191GiCcrSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCYqWDs4PKu4Z4ueKtwDhUUsEaFtsCzbBFPB22VOsQk6gnF2nwr3CjLVhodzES5WVZe%2F6p67XHohRWU7wyQXldnhLnvXyKWSordPUCmvl0IHp7U8OM%2B%2Bjymv9zBrMs67ed33xbxRC%2BznaKDzpj4Hieo50sIhB%2F1M%2FgnATxO4w8GQl9C%2Bcc%2FZ8YfullZiOm%2BuiI66RMVnwzy59q1Q4snRTajSMN%2FtxArmeXCziXDSfnh%2F5Pnu%2FZdzq49byodTCiD8Sq%2FU5IQHzgmJMYovi%2F6r5cFVn69rDuUlt%2FVmYsU21JWgqutmpHRl4znkm1gxhKhgccXkahFldeCsRUNzsCcJpt%2F3n7KG96Zi7sY9zRPffYEasxOG85AZnksd0bjC%2FOs%2FIBSLO0iS7NHopymR6dnywRrd%2FGTwpUbIpLdQb2FwDooH1Lwm4pcchW67thZ6o1IATP3bJQey%2FB23v5FiQXlNh%2BYOdMit1JWT7%2Fsy0LS8TKL%2BfUa0ccU89txWloZJ0wnW269orm08K%2Fk3YdV0CU4XTWVWGgqFsY4oh41FC6FmjLaUQTOmplEuMUHHuJOgXmhF8jFPio%2F1BFEO39%2BFoxdScbM1nHOYZPtgjU9PoekD5SavGKI%2Btdma%2F2iX6BxgokRVBMPkGuQIyskHJigw9YTYyQY6pgEus7Zzn2JpQ%2FvkKjMtw1yB2qbwKUgcqmDxzqpcpzlAIdOFj3f6QE7l847FD8ViLRDrkuQ2WE6Ye8DYWxv2tx4pbjtq71Or7a0pfhOw6MCDrp1R9eSfweji1af4JcYM8mp9rM5ly%2BXssI8X%2FhPkfuG3H2kemW2VAOrzofIf5ummDDSrbfA2PiWL%2F%2BNYZPtYz%2B55ArJzPp23SX16CAfm0gSSI7vD5rLX&X-Amz-Signature=936315783d9d06b85857f118b58839953eb284aa6798edeb20703772114e8ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ZD54LF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2x0Oib2jCRI9USSPHxPH682ccOrvvYeYdCUm2KLNmFAiArcjwkcS7ALpzyaAhNSF3lAM7JsB7df0R6p191GiCcrSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCYqWDs4PKu4Z4ueKtwDhUUsEaFtsCzbBFPB22VOsQk6gnF2nwr3CjLVhodzES5WVZe%2F6p67XHohRWU7wyQXldnhLnvXyKWSordPUCmvl0IHp7U8OM%2B%2Bjymv9zBrMs67ed33xbxRC%2BznaKDzpj4Hieo50sIhB%2F1M%2FgnATxO4w8GQl9C%2Bcc%2FZ8YfullZiOm%2BuiI66RMVnwzy59q1Q4snRTajSMN%2FtxArmeXCziXDSfnh%2F5Pnu%2FZdzq49byodTCiD8Sq%2FU5IQHzgmJMYovi%2F6r5cFVn69rDuUlt%2FVmYsU21JWgqutmpHRl4znkm1gxhKhgccXkahFldeCsRUNzsCcJpt%2F3n7KG96Zi7sY9zRPffYEasxOG85AZnksd0bjC%2FOs%2FIBSLO0iS7NHopymR6dnywRrd%2FGTwpUbIpLdQb2FwDooH1Lwm4pcchW67thZ6o1IATP3bJQey%2FB23v5FiQXlNh%2BYOdMit1JWT7%2Fsy0LS8TKL%2BfUa0ccU89txWloZJ0wnW269orm08K%2Fk3YdV0CU4XTWVWGgqFsY4oh41FC6FmjLaUQTOmplEuMUHHuJOgXmhF8jFPio%2F1BFEO39%2BFoxdScbM1nHOYZPtgjU9PoekD5SavGKI%2Btdma%2F2iX6BxgokRVBMPkGuQIyskHJigw9YTYyQY6pgEus7Zzn2JpQ%2FvkKjMtw1yB2qbwKUgcqmDxzqpcpzlAIdOFj3f6QE7l847FD8ViLRDrkuQ2WE6Ye8DYWxv2tx4pbjtq71Or7a0pfhOw6MCDrp1R9eSfweji1af4JcYM8mp9rM5ly%2BXssI8X%2FhPkfuG3H2kemW2VAOrzofIf5ummDDSrbfA2PiWL%2F%2BNYZPtYz%2B55ArJzPp23SX16CAfm0gSSI7vD5rLX&X-Amz-Signature=0a23071f2477a3368dfa295d64b4d5475e9ed439d8c92fba4833144bd1194951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

