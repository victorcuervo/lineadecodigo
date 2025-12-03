---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625G4IQWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2ydMYGPcA8cHTkOJaCn8CC%2F3vBUCCaoxrSIuL%2B07dAAIhANPHUjcE%2Fu0sRLfhRwsIniwPLu5EeqdS%2BxKCw%2FqCEeLmKv8DCDkQABoMNjM3NDIzMTgzODA1IgzFYO6k6VKr4VKnPe0q3APd%2BrfT5N8IdcHKw07iCXRoVaVWQO9kGFPVabJgf0rwFYNo2xZ4Flgs%2BDNq9OSlG9NaaD2LzVXrhf8fOZ9Q7yau2%2Bx7%2Bp9CbivxII09U81qeT6WZb4YHAAgqgdBVAI5PHDJK5Fq8opyjooiHa1dlCw8zGsZE1YsEg%2BQxD7UhSoCgp7nRNfkMxm%2BVODvG0p3%2BMHJGe6mjWQ0MW%2F%2BoPXlH1iRulJrB4X7TlggNd6BTwCW%2BA8f0XEAZAMFGBSv8sRoH52t%2BAMCDuhgmzddimWcAV%2FynI7ClkfX1nDSgwaTQV1Gp%2BTHWctyqx0dST6uXySc1MfltACmv7f7VPKsSzcjFwGdXsC2Jx1ZWohBcH4M07Tj0OimmtkMuRE1y03o%2F2%2FPLvObxFtPyGP%2B4TGIUspS%2F4aXQvUm9%2BuoliCTpOlUACh4dUuY49pwRpHjpK1n%2BPhDDfDEctttxQT0uL62Wi5Xb%2FmkLpQgzt7NHSvpf0gczNK8pawR92pel%2FWtwyVkBU%2BwCCDL7SD4%2B%2BdlUptry3mpbcds0zRkybU6647OJlAdTRs6KyfHPe9zLFFwBweYqAP36Ax5ektGU2IlmnHMBK9ZFFp8IUA1bCZkZnGRZg6LVLSrD7gUfkOQGm6DTUvUNDColcPJBjqkAU1IGny1umEPnKJ5WYYd6NBuZdRhL9ohBchFtMQP49kQM17OQ2kJvMiDo1cjKvf%2F4c%2BVwugyqKgwSTFm%2BdhVQ15EHKmlXuS4B2UmOU4iJF4nGaSesRnD7FIC%2FGeUdp8QzbqQCKaPw1ilgXfjRNs88Aec4z8ioCel8cNRHYUJ%2FtW4R%2F4KxeLHlSc80ACGbdJd3ULYHRnbZNBQeuDMFe7V9W9v67Xv&X-Amz-Signature=3c5b94c745592c51fd9df88ea9f36b46b76c8f873effd2939e62eef14b38e2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625G4IQWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2ydMYGPcA8cHTkOJaCn8CC%2F3vBUCCaoxrSIuL%2B07dAAIhANPHUjcE%2Fu0sRLfhRwsIniwPLu5EeqdS%2BxKCw%2FqCEeLmKv8DCDkQABoMNjM3NDIzMTgzODA1IgzFYO6k6VKr4VKnPe0q3APd%2BrfT5N8IdcHKw07iCXRoVaVWQO9kGFPVabJgf0rwFYNo2xZ4Flgs%2BDNq9OSlG9NaaD2LzVXrhf8fOZ9Q7yau2%2Bx7%2Bp9CbivxII09U81qeT6WZb4YHAAgqgdBVAI5PHDJK5Fq8opyjooiHa1dlCw8zGsZE1YsEg%2BQxD7UhSoCgp7nRNfkMxm%2BVODvG0p3%2BMHJGe6mjWQ0MW%2F%2BoPXlH1iRulJrB4X7TlggNd6BTwCW%2BA8f0XEAZAMFGBSv8sRoH52t%2BAMCDuhgmzddimWcAV%2FynI7ClkfX1nDSgwaTQV1Gp%2BTHWctyqx0dST6uXySc1MfltACmv7f7VPKsSzcjFwGdXsC2Jx1ZWohBcH4M07Tj0OimmtkMuRE1y03o%2F2%2FPLvObxFtPyGP%2B4TGIUspS%2F4aXQvUm9%2BuoliCTpOlUACh4dUuY49pwRpHjpK1n%2BPhDDfDEctttxQT0uL62Wi5Xb%2FmkLpQgzt7NHSvpf0gczNK8pawR92pel%2FWtwyVkBU%2BwCCDL7SD4%2B%2BdlUptry3mpbcds0zRkybU6647OJlAdTRs6KyfHPe9zLFFwBweYqAP36Ax5ektGU2IlmnHMBK9ZFFp8IUA1bCZkZnGRZg6LVLSrD7gUfkOQGm6DTUvUNDColcPJBjqkAU1IGny1umEPnKJ5WYYd6NBuZdRhL9ohBchFtMQP49kQM17OQ2kJvMiDo1cjKvf%2F4c%2BVwugyqKgwSTFm%2BdhVQ15EHKmlXuS4B2UmOU4iJF4nGaSesRnD7FIC%2FGeUdp8QzbqQCKaPw1ilgXfjRNs88Aec4z8ioCel8cNRHYUJ%2FtW4R%2F4KxeLHlSc80ACGbdJd3ULYHRnbZNBQeuDMFe7V9W9v67Xv&X-Amz-Signature=d607328ce5b6e442f68eafd45f4b6f910714fa0ed66cd1e7d35324fb6b03f45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

