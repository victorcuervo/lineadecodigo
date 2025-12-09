---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QII6E53M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpKlhavVv8toQVWeKZYS8Gr0%2F2IOKSR8gxJquwfSgbvAiAQ%2F7FZc0942%2Bfl0wswil%2F1HNltWR7eEQHe%2BqqT0Qi1XCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1JnYHFDvDk31Ik%2FKtwDW1iUopYFYawW3G4wuAZahUZgdk8YoJYS72XZBOF03qG%2FAd0SR6kEYJCZtEA9wxW84VTBNGJ3mT7hga548v3oULgslI5MdJEPJQ%2BDU8W9cINS%2FWv8UzKPK0XOSKnswr3eP%2Fk1C%2FexgumHka%2FybMa%2B6a2H8IkvE2ZmWZqSxXiMFgTNnAUMJ6%2BZ7OGFILXVSsTij7Ro1%2Fv%2BaNf0EEEUqB7HwCA%2B69rsbhHF0zEymZrJIm92biWv3HFVlDnoQmiC1EfIpqpB7gPrV8J9fsmiXuEv9kn3z8YRrDIuQlBKrs56keBjbV1hqIVhHgz1SdsXzGJRDgvuwHNi2TT7n80g5Z8%2B3Jro20EOVDH88WHI8y0Xa%2FJJDRZd0QKOLKHRc%2BVJCw29tPbt%2BIjm71CvM4WzvZzCs86RC5L1gHp%2FplOIkWmx21GC%2F4adUscM511W4KErIJXcwnatrmPEDWMG8a3LjDcjJDZN4K42zBjuXynPxD94SC5xRlIWDz%2FZnRxRms0I2Y%2F6UJ5%2FAME7W1XuEthyZydztY3vkszRTyWpDQ5lvHK13Hl9ibw%2FQpJi2S4D7FE3g8aINs4CEQ7JKLTFnKcQ%2F9FMsC%2FedWkJaRcTtFso3%2BTHJBMQfasXGUDZdUKccGcw48LdyQY6pgE0Pu7UtdRDgZ239sam153YA%2FQHK9mVNKUwD0Razh0pYRSxj3qSkyuEuBMu6vAS1Leo8SeC5WG8LsqLR4ORGmZwk9ZPxqjfgNtHb%2B8cEAppNj36q07qVQuJkhjhSFXG72eE5RBi5kcGGR4a2ux8zaApvSMSYHCfm2Hc4fTU9VPQYEu1u3GYd6osPt3rTZd8jbIgXHNV08BuknB7yfHuH1dl8CT5yjx1&X-Amz-Signature=df1076fb0fc8c77084cffb42e9fb84337fcb2e6f044ce87f900adecc83fda6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QII6E53M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpKlhavVv8toQVWeKZYS8Gr0%2F2IOKSR8gxJquwfSgbvAiAQ%2F7FZc0942%2Bfl0wswil%2F1HNltWR7eEQHe%2BqqT0Qi1XCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1JnYHFDvDk31Ik%2FKtwDW1iUopYFYawW3G4wuAZahUZgdk8YoJYS72XZBOF03qG%2FAd0SR6kEYJCZtEA9wxW84VTBNGJ3mT7hga548v3oULgslI5MdJEPJQ%2BDU8W9cINS%2FWv8UzKPK0XOSKnswr3eP%2Fk1C%2FexgumHka%2FybMa%2B6a2H8IkvE2ZmWZqSxXiMFgTNnAUMJ6%2BZ7OGFILXVSsTij7Ro1%2Fv%2BaNf0EEEUqB7HwCA%2B69rsbhHF0zEymZrJIm92biWv3HFVlDnoQmiC1EfIpqpB7gPrV8J9fsmiXuEv9kn3z8YRrDIuQlBKrs56keBjbV1hqIVhHgz1SdsXzGJRDgvuwHNi2TT7n80g5Z8%2B3Jro20EOVDH88WHI8y0Xa%2FJJDRZd0QKOLKHRc%2BVJCw29tPbt%2BIjm71CvM4WzvZzCs86RC5L1gHp%2FplOIkWmx21GC%2F4adUscM511W4KErIJXcwnatrmPEDWMG8a3LjDcjJDZN4K42zBjuXynPxD94SC5xRlIWDz%2FZnRxRms0I2Y%2F6UJ5%2FAME7W1XuEthyZydztY3vkszRTyWpDQ5lvHK13Hl9ibw%2FQpJi2S4D7FE3g8aINs4CEQ7JKLTFnKcQ%2F9FMsC%2FedWkJaRcTtFso3%2BTHJBMQfasXGUDZdUKccGcw48LdyQY6pgE0Pu7UtdRDgZ239sam153YA%2FQHK9mVNKUwD0Razh0pYRSxj3qSkyuEuBMu6vAS1Leo8SeC5WG8LsqLR4ORGmZwk9ZPxqjfgNtHb%2B8cEAppNj36q07qVQuJkhjhSFXG72eE5RBi5kcGGR4a2ux8zaApvSMSYHCfm2Hc4fTU9VPQYEu1u3GYd6osPt3rTZd8jbIgXHNV08BuknB7yfHuH1dl8CT5yjx1&X-Amz-Signature=5d4ac77a1da6a3e9a444fa0c22092af5958930739028a25b39ac10d72ad76644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

