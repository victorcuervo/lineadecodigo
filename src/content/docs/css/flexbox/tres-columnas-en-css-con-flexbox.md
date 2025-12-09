---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNP6BIG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuhXP85sPEj9rWAHV%2B2MIZXIIKDQYTQSSKmmA4sbYcLAiBPbvAI89u%2FqRPPJ7uL24GqVhrsuFmZInpeUtG6ZxRZ3SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwF1ymQfp7KMCRJ6CKtwDE368zuO7RkSCtFpeA8%2BQMFk4qb27GZUYwtXCYL3CdB6wABraZO3oYKPMJKfb0K23bk7dFNV3teEF9Ybxio6fGS2uszAU3Eqx12uGq3YwJOlnOKUnvZjaE1y%2FfBVs2nXo6dzcfHLk3EFjhwI2uSTFQsijW7%2B4w0S4qQtzh8cd%2Fo8t8yM3lKx%2Fj141CkcKse8w3Jo%2B2QObSvh3dATIbqXOz5XBjBxC3pZVlhi82Ud%2BhDYk0SWfoQpb6KTTmZM3vmHHZ783DGxMw5UZ5Gw1CiUBpfNSkvqJe3JhQLZPTPj9yRK0YJm7Rucdu3JNPvlZCU7G19%2B%2FMgSST9WdmERnOMAk3fqQuFJjYtwg34vXUy%2FyAel%2FiLizN7YB7UbzNvTl0JWzVoZwQYDQtBNc7zCayMCupHg6ov1f6c7EnkT99lo1rqnIbdbFo%2F%2FGpcQEQ7BF2HAiONWDsGTvcDJady00FpCvHslSyGlIoTvHtXOBlKGfrJZBkR5t0RW4G3%2BtwxMhsK%2B2GEXQzGMvUy5VEuAcP2dbG3ttZJRPxJQJgyPINZc6clmx9YalFUCvnL%2BS05rrH1SSIYBERgXAVOs00QLWIPtnMHgnhseTqrreWAjLQKtdWuhLexGNb%2F96g0unKP0wz6TfyQY6pgHVNs4KHjhudRivBZQYhJOTbcqezn8gwJv2jx9Mmv0FIcY%2BtnFLAzOXtJGJf9TVqdmyE7Z3py%2FaCUTMiCB21ZjATwTQJU88v1QqqIlglATsrEQh4YVJ2s3glw9qhIF79Mw%2Fkax8dr%2FMW27P8E88JKiAYBltjDItRuvLI49hv69zepP1hrmMJFhLWrkSbthUWgvClBCDHCSUx6fFo8Iu%2FqYEgwPEfEzI&X-Amz-Signature=5c63e4de82dcdaf25281dfe2e5bbf24d10afd381ad256c051afd896fbf73a5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNP6BIG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuhXP85sPEj9rWAHV%2B2MIZXIIKDQYTQSSKmmA4sbYcLAiBPbvAI89u%2FqRPPJ7uL24GqVhrsuFmZInpeUtG6ZxRZ3SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwF1ymQfp7KMCRJ6CKtwDE368zuO7RkSCtFpeA8%2BQMFk4qb27GZUYwtXCYL3CdB6wABraZO3oYKPMJKfb0K23bk7dFNV3teEF9Ybxio6fGS2uszAU3Eqx12uGq3YwJOlnOKUnvZjaE1y%2FfBVs2nXo6dzcfHLk3EFjhwI2uSTFQsijW7%2B4w0S4qQtzh8cd%2Fo8t8yM3lKx%2Fj141CkcKse8w3Jo%2B2QObSvh3dATIbqXOz5XBjBxC3pZVlhi82Ud%2BhDYk0SWfoQpb6KTTmZM3vmHHZ783DGxMw5UZ5Gw1CiUBpfNSkvqJe3JhQLZPTPj9yRK0YJm7Rucdu3JNPvlZCU7G19%2B%2FMgSST9WdmERnOMAk3fqQuFJjYtwg34vXUy%2FyAel%2FiLizN7YB7UbzNvTl0JWzVoZwQYDQtBNc7zCayMCupHg6ov1f6c7EnkT99lo1rqnIbdbFo%2F%2FGpcQEQ7BF2HAiONWDsGTvcDJady00FpCvHslSyGlIoTvHtXOBlKGfrJZBkR5t0RW4G3%2BtwxMhsK%2B2GEXQzGMvUy5VEuAcP2dbG3ttZJRPxJQJgyPINZc6clmx9YalFUCvnL%2BS05rrH1SSIYBERgXAVOs00QLWIPtnMHgnhseTqrreWAjLQKtdWuhLexGNb%2F96g0unKP0wz6TfyQY6pgHVNs4KHjhudRivBZQYhJOTbcqezn8gwJv2jx9Mmv0FIcY%2BtnFLAzOXtJGJf9TVqdmyE7Z3py%2FaCUTMiCB21ZjATwTQJU88v1QqqIlglATsrEQh4YVJ2s3glw9qhIF79Mw%2Fkax8dr%2FMW27P8E88JKiAYBltjDItRuvLI49hv69zepP1hrmMJFhLWrkSbthUWgvClBCDHCSUx6fFo8Iu%2FqYEgwPEfEzI&X-Amz-Signature=ec2389211fd350712ff8d440e423119179788497d1a69e5e0e57a752f69df055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

