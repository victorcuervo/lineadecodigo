---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BNM3IJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPwHdGEcNmhYAVmFPvVI2NLZg9yy%2B%2FPE%2F2muEJZUdZkwIgYpG0lz9dWiyB3H932CaeizX%2Fj%2FJ2vsebZM7f6v%2FqQjgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5tWE0AC1ZkdhYswircA7G%2FC1Zbk2Yr9ESJK%2F1uPGP6UvziVRJxwixHWXqGqcpkVemktI59kA8MaNPHJPmtrWSb%2BKwuYGc30%2FPacxH8DfuinvZxbVIeWKBXjgQ93awB1O%2FDPpLELstHOyrFq45i6kO4dMGZaZi6oduqkNo3pGAahbKkfzxJgO0dJ%2BSfluKzyxgjRjZnTFWkpAvlxRoj9EcHu8s7HeGxegznOfasoYJHGEKG13mmecNQEZYZoDxDavye%2BnSEe4YUKxSa3LIomyPLdXbSur2e5SuNRy7keqzKxKdj6M5mQ6qakLc3%2FOF9oSSyimwL4AYwNhzHbWgRmabI9uBM38phWA4DB9XZoY%2BXEeH0MwYPFVSy79lr%2BO5Wxm0yTBTZy0bD19YAdrZc1RBRwPAcK%2Fb92jedA6Dx2EqIINFXz%2Bjjr5s%2F7poYsdcbbtuIk4nlX%2FOTIzKMPWsm%2FjE2UkQwg4ZsEuuznO%2BlTTLtvWuXh2Jp2UXJqXcv8wVNT9jgb%2BBvMCo6h%2FJiueOJgm4Jz4DGQWQwcF%2FHQ%2Bw4KisgfZZs7UmWv1edVrwY5lpo%2BsU7c%2B9TiEPKbwghfocm28tQmeCKTWvNiLegeEkRg4lFSmqS%2BsiyrruRZpYq%2Fc%2F63TpjE58Egof%2FDTBKMPag1MkGOqUB2PMUafsQEBjUWIu0grx2KGDXGs1ITxAM3te5UHObF9XeuuX%2F%2FHPM69vOwE4yjJqgiCT%2Bf7mMC0zdPGnm9qBp3LtyfN%2B50pLPDNA9eeNRnFv86VMc13GqBhTz929H5N2%2Fiextww2JB8XJv4GFRXleBm8aLVigmeMM8%2FHEOfINWZDBwY6Nyoe9ERCPneC%2BcivnAU1GolOawfc%2FGzLoCFafAQ6dgkgc&X-Amz-Signature=8316d0c3bc084fe20820f962aa43e7794b09e75b3787f5e40b4a97ded8a6069e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BNM3IJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPwHdGEcNmhYAVmFPvVI2NLZg9yy%2B%2FPE%2F2muEJZUdZkwIgYpG0lz9dWiyB3H932CaeizX%2Fj%2FJ2vsebZM7f6v%2FqQjgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5tWE0AC1ZkdhYswircA7G%2FC1Zbk2Yr9ESJK%2F1uPGP6UvziVRJxwixHWXqGqcpkVemktI59kA8MaNPHJPmtrWSb%2BKwuYGc30%2FPacxH8DfuinvZxbVIeWKBXjgQ93awB1O%2FDPpLELstHOyrFq45i6kO4dMGZaZi6oduqkNo3pGAahbKkfzxJgO0dJ%2BSfluKzyxgjRjZnTFWkpAvlxRoj9EcHu8s7HeGxegznOfasoYJHGEKG13mmecNQEZYZoDxDavye%2BnSEe4YUKxSa3LIomyPLdXbSur2e5SuNRy7keqzKxKdj6M5mQ6qakLc3%2FOF9oSSyimwL4AYwNhzHbWgRmabI9uBM38phWA4DB9XZoY%2BXEeH0MwYPFVSy79lr%2BO5Wxm0yTBTZy0bD19YAdrZc1RBRwPAcK%2Fb92jedA6Dx2EqIINFXz%2Bjjr5s%2F7poYsdcbbtuIk4nlX%2FOTIzKMPWsm%2FjE2UkQwg4ZsEuuznO%2BlTTLtvWuXh2Jp2UXJqXcv8wVNT9jgb%2BBvMCo6h%2FJiueOJgm4Jz4DGQWQwcF%2FHQ%2Bw4KisgfZZs7UmWv1edVrwY5lpo%2BsU7c%2B9TiEPKbwghfocm28tQmeCKTWvNiLegeEkRg4lFSmqS%2BsiyrruRZpYq%2Fc%2F63TpjE58Egof%2FDTBKMPag1MkGOqUB2PMUafsQEBjUWIu0grx2KGDXGs1ITxAM3te5UHObF9XeuuX%2F%2FHPM69vOwE4yjJqgiCT%2Bf7mMC0zdPGnm9qBp3LtyfN%2B50pLPDNA9eeNRnFv86VMc13GqBhTz929H5N2%2Fiextww2JB8XJv4GFRXleBm8aLVigmeMM8%2FHEOfINWZDBwY6Nyoe9ERCPneC%2BcivnAU1GolOawfc%2FGzLoCFafAQ6dgkgc&X-Amz-Signature=745eb3e801f7dd17f6224e5ed323cee66f02859edab054d6293f57c6d872cab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

