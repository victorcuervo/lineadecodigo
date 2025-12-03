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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466543AYOIQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD%2BgM1kgBZhCH5leBIctl7uo0th%2F2ZeDtcSx519ma8AWgIhAJ3HV8nETmEPRPzTGSv1rE6QZvigod%2BNHHNFc%2FAPVgI1Kv8DCDEQABoMNjM3NDIzMTgzODA1IgzKx5XoTAZPhwp%2BadUq3ANml4ndnAS5hZiW%2BAmOU13yBEoYd4Uc3gowQMjVWudKe%2By9qiO95tkxjicmMmU23T0jMkdGAmew3%2FbzTZyzDgNg8d%2BIV8qw18%2BJtJShZN4kLtnmMPyg0stF3EgFrAEX%2BtQWEAsYIEkGVOpYnyL2Phs9YPY9fxa0ktZK0GT9CCLMxg1ZQIZ86BoI2a2fqbZIbyVo6k4fUT2JR0yg4t1gbA2HqxWBzBGxetUMJdaAhJ5PMY7sULwdvb76RLgm953clDWxYMYrmQs4stwf1B6RtMRN4OroBR%2FiL24h%2BtzFh9yGsTor2B0b4WoThonSdSEk4e9nNs%2FUr37FQrWUnNsA0IeuzjRD1BdOO8iwH8XZz3Zot1blWcGvhvS%2BVudAZ4dbTRIYKySKsXs593TCpcovZS9YaRVc7ARuBCNgHWjWjifMKIilVrsXsp2tf9yZ8t8pM%2FPG7JQIYvTF1Zkah%2F%2BdCveIlKXaiGvnpF3kMaF3UMBCbbDwoZJrb%2FnznWR%2FCIwZFjgBftwvZnhdUpLstGJqnB8ZXwZJT5EZ%2FAY1EX4HRKuGHukGG6og61rrwPyzMxie10O6Ie3JknOBdNfCs4%2FooWyZI7uhFanS3izUPsj4boAGV63MYxdq0DJLbgTVQzDpwMHJBjqkAfGqTuEN088ChGz2fRR9ao7Is9ebImm4JQqcPeYv%2Bb4tbJU%2FoSCSNBb%2FIq0j%2FkHdzjGvgd%2BffyzTkwgn8iGezjO1dRh7Da9C8H%2FK2OIhyVBmDd724Iym%2BvfCTWcXMWMI6WsqgPSrv1dUPKgnK4b6Ykf50I%2BSM4o%2BsfhcMpeledY1w8Pq%2B18miSs6Vv0UeAbnqhAYlmF3qy%2FREvgS13R3XTvg%2F75N&X-Amz-Signature=769193b37f45996b8e6e93a74be402d27f1df2204cebd4b238309214cff73ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466543AYOIQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD%2BgM1kgBZhCH5leBIctl7uo0th%2F2ZeDtcSx519ma8AWgIhAJ3HV8nETmEPRPzTGSv1rE6QZvigod%2BNHHNFc%2FAPVgI1Kv8DCDEQABoMNjM3NDIzMTgzODA1IgzKx5XoTAZPhwp%2BadUq3ANml4ndnAS5hZiW%2BAmOU13yBEoYd4Uc3gowQMjVWudKe%2By9qiO95tkxjicmMmU23T0jMkdGAmew3%2FbzTZyzDgNg8d%2BIV8qw18%2BJtJShZN4kLtnmMPyg0stF3EgFrAEX%2BtQWEAsYIEkGVOpYnyL2Phs9YPY9fxa0ktZK0GT9CCLMxg1ZQIZ86BoI2a2fqbZIbyVo6k4fUT2JR0yg4t1gbA2HqxWBzBGxetUMJdaAhJ5PMY7sULwdvb76RLgm953clDWxYMYrmQs4stwf1B6RtMRN4OroBR%2FiL24h%2BtzFh9yGsTor2B0b4WoThonSdSEk4e9nNs%2FUr37FQrWUnNsA0IeuzjRD1BdOO8iwH8XZz3Zot1blWcGvhvS%2BVudAZ4dbTRIYKySKsXs593TCpcovZS9YaRVc7ARuBCNgHWjWjifMKIilVrsXsp2tf9yZ8t8pM%2FPG7JQIYvTF1Zkah%2F%2BdCveIlKXaiGvnpF3kMaF3UMBCbbDwoZJrb%2FnznWR%2FCIwZFjgBftwvZnhdUpLstGJqnB8ZXwZJT5EZ%2FAY1EX4HRKuGHukGG6og61rrwPyzMxie10O6Ie3JknOBdNfCs4%2FooWyZI7uhFanS3izUPsj4boAGV63MYxdq0DJLbgTVQzDpwMHJBjqkAfGqTuEN088ChGz2fRR9ao7Is9ebImm4JQqcPeYv%2Bb4tbJU%2FoSCSNBb%2FIq0j%2FkHdzjGvgd%2BffyzTkwgn8iGezjO1dRh7Da9C8H%2FK2OIhyVBmDd724Iym%2BvfCTWcXMWMI6WsqgPSrv1dUPKgnK4b6Ykf50I%2BSM4o%2BsfhcMpeledY1w8Pq%2B18miSs6Vv0UeAbnqhAYlmF3qy%2FREvgS13R3XTvg%2F75N&X-Amz-Signature=ca8bfe2f69c64217117a02b2fba93603ba019fd71eae9f3713ed94f9ad03c256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

