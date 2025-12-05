---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TJUDFQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDHZaZAG1ETW7zs3cJFRwjhxGLUHcMRki3g072WlpxAIgK78Gb7Z4pE%2BJi7L1%2FydRhMqbilcW%2B2nCtJNOF2YcISgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDH6RKOqOdDGTjGbB9ircA4%2BfHR7ntEys8wfxn%2BO5Z4q47%2FzOm1xdm%2Bll0IhMicawmX98gPumMcIEbl6VoyFIMtYPVv0jpICo9xr5j2N7Tg%2F%2FAvKVMROU9NXQpCumIarkeYj41Ad2ybVtiKSaLIX%2FummypaK1CVzyj%2F4rngPbvQdHMw%2FSDZMGcQONwtX6tRgNsaBtan9vs%2Bm6JXdEVZMKNzb23UHPnjmIj2vIm%2BEMiDPdq3dbOdZsPSeH6dAKnLmBEmBR9kRvoa7BRDI9t5qKxPCpj%2FhUOODjBwn7vEWLzes8uo2GSj%2B5WVGGoyh72pSuKd2ReQBeaCghzQo4At81K%2FIsRV9qhSvOrcwHjbi1racbkTBYRTgLOyqCE9%2BkcNFFu%2BEgS1i1wODNZv1okNI6bQxQS%2FdcsHo9ItgH3NspT4CBTjFE1GZC9oxxuoMHkimQLxckehBFG0osYjH9WL%2FcqJdqwTf9Q6%2FHGkmno20U53Oel9d0vwO8WRCJat0m2o2MGnj126%2FfNlZD5SitYmkS25h3qzyJPpKriuu%2F9flPgW%2BbJ3tJvoPWsCLWv5Vi0hlKKMLIe%2Fb9grC0fYtfmMVNadatDURHhioCiegsMvGPpE02%2B0NFxsVRinHRCw3bq22rg6uyXgeES5MzzbP4MO2oyskGOqUBj48ttkTU7%2Fj71Q1Mr4SofkvURfUghwvWARzWe9R2DWIy%2BoAAXn2P6hoh6sBwGBTTZRZHzI6vxSWgSNjrAnOErrOToFy3zxyNyL4TVK8yK4ymAY7%2B9MbtvmvROT0vaOIH4Gy0C4jSFWlhhfNMkUAsgMmnPpA3O%2FH%2F8fR0G4EQ6X5p3Y%2FgegDcvpjsuWNxHYES9nDvjlSg0YRoaNbHwYxkxbFsrbvE&X-Amz-Signature=f15ee0e488ab37dafdfbf0512edda9d8dab9d836c97cca8940559d175f183b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TJUDFQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnDHZaZAG1ETW7zs3cJFRwjhxGLUHcMRki3g072WlpxAIgK78Gb7Z4pE%2BJi7L1%2FydRhMqbilcW%2B2nCtJNOF2YcISgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDH6RKOqOdDGTjGbB9ircA4%2BfHR7ntEys8wfxn%2BO5Z4q47%2FzOm1xdm%2Bll0IhMicawmX98gPumMcIEbl6VoyFIMtYPVv0jpICo9xr5j2N7Tg%2F%2FAvKVMROU9NXQpCumIarkeYj41Ad2ybVtiKSaLIX%2FummypaK1CVzyj%2F4rngPbvQdHMw%2FSDZMGcQONwtX6tRgNsaBtan9vs%2Bm6JXdEVZMKNzb23UHPnjmIj2vIm%2BEMiDPdq3dbOdZsPSeH6dAKnLmBEmBR9kRvoa7BRDI9t5qKxPCpj%2FhUOODjBwn7vEWLzes8uo2GSj%2B5WVGGoyh72pSuKd2ReQBeaCghzQo4At81K%2FIsRV9qhSvOrcwHjbi1racbkTBYRTgLOyqCE9%2BkcNFFu%2BEgS1i1wODNZv1okNI6bQxQS%2FdcsHo9ItgH3NspT4CBTjFE1GZC9oxxuoMHkimQLxckehBFG0osYjH9WL%2FcqJdqwTf9Q6%2FHGkmno20U53Oel9d0vwO8WRCJat0m2o2MGnj126%2FfNlZD5SitYmkS25h3qzyJPpKriuu%2F9flPgW%2BbJ3tJvoPWsCLWv5Vi0hlKKMLIe%2Fb9grC0fYtfmMVNadatDURHhioCiegsMvGPpE02%2B0NFxsVRinHRCw3bq22rg6uyXgeES5MzzbP4MO2oyskGOqUBj48ttkTU7%2Fj71Q1Mr4SofkvURfUghwvWARzWe9R2DWIy%2BoAAXn2P6hoh6sBwGBTTZRZHzI6vxSWgSNjrAnOErrOToFy3zxyNyL4TVK8yK4ymAY7%2B9MbtvmvROT0vaOIH4Gy0C4jSFWlhhfNMkUAsgMmnPpA3O%2FH%2F8fR0G4EQ6X5p3Y%2FgegDcvpjsuWNxHYES9nDvjlSg0YRoaNbHwYxkxbFsrbvE&X-Amz-Signature=6983473f366c084ad4a0c3148c65ddec126d9038700955a8a434cc8ed4032b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

