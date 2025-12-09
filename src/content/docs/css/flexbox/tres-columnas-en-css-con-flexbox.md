---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7MHC3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm6FwA7mED3tdfOm%2BiSDwYdMSlqf6vFpPGTyuvGmXKpAiEAoX5e7st1sXn8Iif9pP%2BnBMEWjk04qCQpc93Qi5RixcgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQEkX4HLUJRGGPxEyrcA2e9mxSKOihyeHPg1aI%2FnnqfpsoTOalWZUc466hDJ7fN0PLi9oWwbbm2%2B0JGwb6kOcyfz5PPjnRKe1GBIoAC%2FuEuO6R4r1v30%2BHI2idBMceDO6BvNOeWe8qT1n1bJloUJcTQz6Igt50CRz1Ja69S0ifmZy2Jr4USESTJej4bzh9ZPsgNWlIj8XtH%2FtyNc2K8TiJ2FbseapKpk4WvkmC41Q%2BrKY5TtdbWBMBPs9kO526Ds9YRPs3ezGRx72r8M4kMkSwHR2Z%2BsdVOybEfRlz2rKRg6px8NunI9tu1yurV%2FrKMpgMbFFELjFKDKR2OjClh7gO%2FaBmA5q4w%2FTrpk5RGnbP9bP2fWbI5ki2K6hB27wcJMce%2BIevAdN4xkT%2F8Wql8f4NJ7hKhwn8M9lJMODmvGzxrRQTPYbNPbYKtwNi%2FvJZMRIRqNJl0iOzYujBJb1Ly%2BwyqiqPPEKBjz2NpxWz4nXOwoCgQpX3g8dMUzXGblbfGYaeCrHF9LJhonGKm8ZpWXRSEyJenF92JOYHGT2C2YfkFs%2BmBl6RSVMfwLCn5LTj7KFZwy8pNqeKUykUQCpQ3ZaA7xlFl%2BXS8%2BAU56HAaeStTcrwhXGrd8bhkaA1Vo0VkqaewpnHhrjvIl0dAMK2l38kGOqUBQg%2BygJyLx1onVJKluL9tMKbMBtBq2F8qpy65%2FuoqsYiHgaF%2Fw1hCvM5zuLX5mrodO3LGghD2QkXm825n5VdYGiNp1vZwNs6qoMYIQjTNCg%2FHWA44rc8nXn99ZJaEeKxv4m2YzlvveWpIiDpkzGmTFf4WEKbI8JXxrJH2K17OyRWwbpGx%2FVpnZG0n4%2F8PLp0bynQFJb%2FioAuMtywkqz8ibxS%2B%2ByrW&X-Amz-Signature=ac8ff510b1f800b5c1acb1eb301ded23cbdf10067cb228e3a502ef4871da4710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7MHC3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm6FwA7mED3tdfOm%2BiSDwYdMSlqf6vFpPGTyuvGmXKpAiEAoX5e7st1sXn8Iif9pP%2BnBMEWjk04qCQpc93Qi5RixcgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQEkX4HLUJRGGPxEyrcA2e9mxSKOihyeHPg1aI%2FnnqfpsoTOalWZUc466hDJ7fN0PLi9oWwbbm2%2B0JGwb6kOcyfz5PPjnRKe1GBIoAC%2FuEuO6R4r1v30%2BHI2idBMceDO6BvNOeWe8qT1n1bJloUJcTQz6Igt50CRz1Ja69S0ifmZy2Jr4USESTJej4bzh9ZPsgNWlIj8XtH%2FtyNc2K8TiJ2FbseapKpk4WvkmC41Q%2BrKY5TtdbWBMBPs9kO526Ds9YRPs3ezGRx72r8M4kMkSwHR2Z%2BsdVOybEfRlz2rKRg6px8NunI9tu1yurV%2FrKMpgMbFFELjFKDKR2OjClh7gO%2FaBmA5q4w%2FTrpk5RGnbP9bP2fWbI5ki2K6hB27wcJMce%2BIevAdN4xkT%2F8Wql8f4NJ7hKhwn8M9lJMODmvGzxrRQTPYbNPbYKtwNi%2FvJZMRIRqNJl0iOzYujBJb1Ly%2BwyqiqPPEKBjz2NpxWz4nXOwoCgQpX3g8dMUzXGblbfGYaeCrHF9LJhonGKm8ZpWXRSEyJenF92JOYHGT2C2YfkFs%2BmBl6RSVMfwLCn5LTj7KFZwy8pNqeKUykUQCpQ3ZaA7xlFl%2BXS8%2BAU56HAaeStTcrwhXGrd8bhkaA1Vo0VkqaewpnHhrjvIl0dAMK2l38kGOqUBQg%2BygJyLx1onVJKluL9tMKbMBtBq2F8qpy65%2FuoqsYiHgaF%2Fw1hCvM5zuLX5mrodO3LGghD2QkXm825n5VdYGiNp1vZwNs6qoMYIQjTNCg%2FHWA44rc8nXn99ZJaEeKxv4m2YzlvveWpIiDpkzGmTFf4WEKbI8JXxrJH2K17OyRWwbpGx%2FVpnZG0n4%2F8PLp0bynQFJb%2FioAuMtywkqz8ibxS%2B%2ByrW&X-Amz-Signature=a1e36e0577eadc77cc5c790fdda7ba1f40a95dcd48e7ed81eb585375f3a80d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

