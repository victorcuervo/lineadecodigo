---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNT6IZI2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVDQnYvMo1dAVU4CIAhKoS%2BnaJfkLmZI6p59eKguKKWAiACuHg6wUpyNf3ox2BjWcsxVsRGu0eJxkIoAgc5azJaviqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIAJSHT9dLw2Su11KtwDfoMkocYljM8GdFb1BA0PgVm64bMYhSvP3N2hGBY7v6m5XdZT0jVMtpLWnvqsZBWNcFATSDPDqXZ8q42sR4fl1igpfuwb8pwMzgnEd9ZYMqzML%2BEVIiyP3zOCx%2F07ADXR6C6wWNll%2BSicyR5h6ThPw9NkyKgPPy22T200oRxgKwLpugkvQMrIshzHSWLTglnP6ctVL%2BunqvjffFH8LQtvasGQnzGp6yTnx7LFGfaAaj5%2FeXGOWoMEpykVhmaVwYQKaBJWUpZq1GiVuf579BZ8RvWdve81F8mpmJb05%2FUjex7Ny6sPBOfzaw7hhqzhmULlN%2F3iLUPxUibdYZaBVlvXGeAgVcyJKncuM33fP2nrZRy3SwiBLTgCZzc9cvsoiJo9RItvBLb9zK1dMLvBVYw7xdyy5gJAd6Ji%2F57acdYtNQwv1a37UvGluEZEnUaE5Z%2B1e8Ap%2Bs30B787zAty6gQOZ%2BsBFnf5SrquNaItLGlfY9FLKeCgB%2BuopMJnS1dGVQYaGfbwMZppx5fjYwkEjq0hKsSEG%2Foteiz%2FaokhcpKXcNPaO6rqrp8sdBXNgfumXvl3zyTolcKtLg6Sn9tJdCD5AKotC6rq9fkksZxI4pHtdBTOOugY3MGd0DH1N%2FIw38PdyQY6pgHsKME8OMA8UPOZSnHLlxgqXhWX0COuHvuvXYxUKwYWscjUCLBe3mp1SiImbyiTow6WIyexg58fPcDE4k1jCLGlvePyHIzXSXhkb0sSv0SCOAN6CGYlnqHmb5jC5lxQUQnm%2BKWtJb4qvLHVgRx5HapVHCrnbf5Cqs9d5Xf2YMI2L1CrkkBZf1QB9%2BIeZuJWnEOm3cM8ipbQ6cnE7h1m2iRIILr%2FS7ld&X-Amz-Signature=e8a07a0b521daf896beb93592790bec563ea06a1578e2d9ccb2d1a6bb35d4f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNT6IZI2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVDQnYvMo1dAVU4CIAhKoS%2BnaJfkLmZI6p59eKguKKWAiACuHg6wUpyNf3ox2BjWcsxVsRGu0eJxkIoAgc5azJaviqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIAJSHT9dLw2Su11KtwDfoMkocYljM8GdFb1BA0PgVm64bMYhSvP3N2hGBY7v6m5XdZT0jVMtpLWnvqsZBWNcFATSDPDqXZ8q42sR4fl1igpfuwb8pwMzgnEd9ZYMqzML%2BEVIiyP3zOCx%2F07ADXR6C6wWNll%2BSicyR5h6ThPw9NkyKgPPy22T200oRxgKwLpugkvQMrIshzHSWLTglnP6ctVL%2BunqvjffFH8LQtvasGQnzGp6yTnx7LFGfaAaj5%2FeXGOWoMEpykVhmaVwYQKaBJWUpZq1GiVuf579BZ8RvWdve81F8mpmJb05%2FUjex7Ny6sPBOfzaw7hhqzhmULlN%2F3iLUPxUibdYZaBVlvXGeAgVcyJKncuM33fP2nrZRy3SwiBLTgCZzc9cvsoiJo9RItvBLb9zK1dMLvBVYw7xdyy5gJAd6Ji%2F57acdYtNQwv1a37UvGluEZEnUaE5Z%2B1e8Ap%2Bs30B787zAty6gQOZ%2BsBFnf5SrquNaItLGlfY9FLKeCgB%2BuopMJnS1dGVQYaGfbwMZppx5fjYwkEjq0hKsSEG%2Foteiz%2FaokhcpKXcNPaO6rqrp8sdBXNgfumXvl3zyTolcKtLg6Sn9tJdCD5AKotC6rq9fkksZxI4pHtdBTOOugY3MGd0DH1N%2FIw38PdyQY6pgHsKME8OMA8UPOZSnHLlxgqXhWX0COuHvuvXYxUKwYWscjUCLBe3mp1SiImbyiTow6WIyexg58fPcDE4k1jCLGlvePyHIzXSXhkb0sSv0SCOAN6CGYlnqHmb5jC5lxQUQnm%2BKWtJb4qvLHVgRx5HapVHCrnbf5Cqs9d5Xf2YMI2L1CrkkBZf1QB9%2BIeZuJWnEOm3cM8ipbQ6cnE7h1m2iRIILr%2FS7ld&X-Amz-Signature=286bb34f094771fa7c0c61cdf4fca9196330931ce2276e88a66b86ed30afb64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

