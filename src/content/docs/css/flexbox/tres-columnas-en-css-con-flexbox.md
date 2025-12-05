---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISVCJVU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKfXxofwsuOzQhZQM7kGXTy8CocnytoHjl3emCmQEpHAiADm6GqMGMwssUnBHamC66hJ0Yujkq5rpBvF5PxfZehLir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMkb2Binaajoy1PDu1KtwD2tUvHYnoQIFfixrA%2FH%2B%2BmuUyT3LkILeC8YIQWzAF8yg6%2FQd5Io34KoHw17hXiPeMgdqTfD%2BDePD3Zu0CKGgmJjIRuCzHrrAcqGYsDmsNkk2AGHU%2F4jrvj5mhNHE6GDx%2FIIoA5olmwQ8LhMhIJEJb07cgTEKZLxO2m34LvoZ9cKUs4ABp38X%2FVzMbE6BdxIynpb92msITOgvIxNwZGUI%2BKYLDHTQ43ASBIrD0Ji%2BRMFJ4muE%2FoRazlJOEHZIdGGSz%2FoF9OxUa0LmePmQ%2B9Ff5jsB7%2F2GyWhO5BLCySBgvF%2BahFUG4ldiXrZpMtHKqqKEGNSw2nLxa%2FmOCxVskOLXrF91U4Ef4Yss26k8skqGEjaezKe%2B6%2F1RDSR1sG%2BJrfFQukNiGO%2Fnl80v7dPeF5uvM1Yki9iJTMKrXvxW%2FvLo3zFr08KArixmk14MBBcSIRO7CU8qi2OOZrSDKejpEhJQTv7I4U6ybpC1EYG0bZBmUwpySaCFOzoobRMug%2FTZ9%2FkOKCMpazqrp7VhzknW5hS9POdPK6PwYV66shf52Ba3AEtxq9xW4YhEU151cA%2FXIblP9o4vLshbhkayeSpHVmu1OP%2BxBeKm0lFcy1TjBTR9pOQAK%2BHVp32ysym097YEwi7HJyQY6pgE0IF%2F%2Bt5FQQyr%2Bm7JkSHIrGVv6n%2B29TTFnwUwG5sy2UfEvJl7kDSuuQJgz%2FVrJyjrGZ07AMZi1WLBH3BUGfbF5iooRhkXUUBCIHmcXU%2FlhOwqT8cFRD%2Bnky%2B3POUzyOhstx%2BIrb%2BMpWddFWwsoPSTYPpU6WHIyoLUzqga%2FUr%2B3TvwMku%2FiRHs%2BdR%2FhYW2VKVFUEF7kpoMNxadiNFxEJ6hY25IyvPaK&X-Amz-Signature=b7afe3e2e486cc043671f8ddd1bf6e68f38d928a51ecc54c447d0a6c097f7903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISVCJVU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKfXxofwsuOzQhZQM7kGXTy8CocnytoHjl3emCmQEpHAiADm6GqMGMwssUnBHamC66hJ0Yujkq5rpBvF5PxfZehLir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMkb2Binaajoy1PDu1KtwD2tUvHYnoQIFfixrA%2FH%2B%2BmuUyT3LkILeC8YIQWzAF8yg6%2FQd5Io34KoHw17hXiPeMgdqTfD%2BDePD3Zu0CKGgmJjIRuCzHrrAcqGYsDmsNkk2AGHU%2F4jrvj5mhNHE6GDx%2FIIoA5olmwQ8LhMhIJEJb07cgTEKZLxO2m34LvoZ9cKUs4ABp38X%2FVzMbE6BdxIynpb92msITOgvIxNwZGUI%2BKYLDHTQ43ASBIrD0Ji%2BRMFJ4muE%2FoRazlJOEHZIdGGSz%2FoF9OxUa0LmePmQ%2B9Ff5jsB7%2F2GyWhO5BLCySBgvF%2BahFUG4ldiXrZpMtHKqqKEGNSw2nLxa%2FmOCxVskOLXrF91U4Ef4Yss26k8skqGEjaezKe%2B6%2F1RDSR1sG%2BJrfFQukNiGO%2Fnl80v7dPeF5uvM1Yki9iJTMKrXvxW%2FvLo3zFr08KArixmk14MBBcSIRO7CU8qi2OOZrSDKejpEhJQTv7I4U6ybpC1EYG0bZBmUwpySaCFOzoobRMug%2FTZ9%2FkOKCMpazqrp7VhzknW5hS9POdPK6PwYV66shf52Ba3AEtxq9xW4YhEU151cA%2FXIblP9o4vLshbhkayeSpHVmu1OP%2BxBeKm0lFcy1TjBTR9pOQAK%2BHVp32ysym097YEwi7HJyQY6pgE0IF%2F%2Bt5FQQyr%2Bm7JkSHIrGVv6n%2B29TTFnwUwG5sy2UfEvJl7kDSuuQJgz%2FVrJyjrGZ07AMZi1WLBH3BUGfbF5iooRhkXUUBCIHmcXU%2FlhOwqT8cFRD%2Bnky%2B3POUzyOhstx%2BIrb%2BMpWddFWwsoPSTYPpU6WHIyoLUzqga%2FUr%2B3TvwMku%2FiRHs%2BdR%2FhYW2VKVFUEF7kpoMNxadiNFxEJ6hY25IyvPaK&X-Amz-Signature=f52c3b1d7e475c9baab26bb7c6129ca70e3f218daeb836c647fe5f2469fa5a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

