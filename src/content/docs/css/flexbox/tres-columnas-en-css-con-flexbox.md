---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722CDUCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeb2j0SXxY4H9SvI0sTshatBaofVrl68KueCqE6w%2FTcAiAt8Nz%2B%2FYweO9Fztk%2BYrsfRnnV%2FjhaVb85gYWxhXaVCzCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZhy4fsngAPbKC%2BuKtwD7Uuiwc2mU62%2BdPoH9yoN4SpOSbrBqLXOvRRiJFBjIuVHDHH807nXD4KByNf9NJDUBW5eyalcjsTAnPjg7vBsZblwP4AZ1RbaGAsjRsJhqWyjSgUZ5E3eokU3BmUQrjMNOrHpQfS6SsLGiS0O89kj072JWsBovEIS89CQ3YCCoc6mB68KGsxIaIVy8ERRTgkoE7R55uwiDTBBwDPRfc1rB8tc97PKJQtqVxIKq4K881QkG0mRr2rL6n6Ba2cRMlxPN1jcy0IbWKSyo2SlhcqPQkyjHP0Kp8Cz%2FaasihjGvDuRfkial2rkTicK8zqwkQDFGS3%2Ff9eaZy74EQYbmi6NSMJmWwT4UC0daLxDSFtg%2F5ZLVQypQzhLb3Hs88zAytS2ZUDjjtZxf6uTn8LBJ7POFtLI0o9I9%2F4sltnPDSum2Pj0IG7ebDyvSXOAvv9xHm2BbPILBXuDR52Y4jcVrSGhYblg2zgI9851VVVu0z4EEqZ3t0n9rs%2Fcr4mGoB%2BwCVZnBrAyKQ8akk9ApO8LM3xv60fIKgcck4bD%2FH9wIqMcpwUe6zLN2RcPh0LyuWWoHbi1o8oIN%2F%2F6WUbnMN5CmhQPjIX4omRYhqOWkyFppw3XfqukmyCaEM27Ho0wJmwwo77WyQY6pgEWN4LencfqvPdfgDQfaSkUO2up2EOc%2B%2F9sUW5TuxBHW84lJYYy3p%2B3z8bmEEZSl%2FGib%2Bv1EeAggTODe1OSNpg6tdaKxz6OS2S8dyLXMZ5LjsF3UDaXvIIVOxuhcUqfkZq1I66%2BW8SFnY166kh%2F%2BXLiislTMJ%2F3ujDN0Q3iWJAxwNq0OMt6%2B61EGFmhF9XDbPnETK3Aa%2FVJ%2FKd0hYxiehLZFha2R%2Bf6&X-Amz-Signature=c1093b237685d234ae2684fae1178589a7218238cc6fb9822d2938208ddb7c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722CDUCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeb2j0SXxY4H9SvI0sTshatBaofVrl68KueCqE6w%2FTcAiAt8Nz%2B%2FYweO9Fztk%2BYrsfRnnV%2FjhaVb85gYWxhXaVCzCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZhy4fsngAPbKC%2BuKtwD7Uuiwc2mU62%2BdPoH9yoN4SpOSbrBqLXOvRRiJFBjIuVHDHH807nXD4KByNf9NJDUBW5eyalcjsTAnPjg7vBsZblwP4AZ1RbaGAsjRsJhqWyjSgUZ5E3eokU3BmUQrjMNOrHpQfS6SsLGiS0O89kj072JWsBovEIS89CQ3YCCoc6mB68KGsxIaIVy8ERRTgkoE7R55uwiDTBBwDPRfc1rB8tc97PKJQtqVxIKq4K881QkG0mRr2rL6n6Ba2cRMlxPN1jcy0IbWKSyo2SlhcqPQkyjHP0Kp8Cz%2FaasihjGvDuRfkial2rkTicK8zqwkQDFGS3%2Ff9eaZy74EQYbmi6NSMJmWwT4UC0daLxDSFtg%2F5ZLVQypQzhLb3Hs88zAytS2ZUDjjtZxf6uTn8LBJ7POFtLI0o9I9%2F4sltnPDSum2Pj0IG7ebDyvSXOAvv9xHm2BbPILBXuDR52Y4jcVrSGhYblg2zgI9851VVVu0z4EEqZ3t0n9rs%2Fcr4mGoB%2BwCVZnBrAyKQ8akk9ApO8LM3xv60fIKgcck4bD%2FH9wIqMcpwUe6zLN2RcPh0LyuWWoHbi1o8oIN%2F%2F6WUbnMN5CmhQPjIX4omRYhqOWkyFppw3XfqukmyCaEM27Ho0wJmwwo77WyQY6pgEWN4LencfqvPdfgDQfaSkUO2up2EOc%2B%2F9sUW5TuxBHW84lJYYy3p%2B3z8bmEEZSl%2FGib%2Bv1EeAggTODe1OSNpg6tdaKxz6OS2S8dyLXMZ5LjsF3UDaXvIIVOxuhcUqfkZq1I66%2BW8SFnY166kh%2F%2BXLiislTMJ%2F3ujDN0Q3iWJAxwNq0OMt6%2B61EGFmhF9XDbPnETK3Aa%2FVJ%2FKd0hYxiehLZFha2R%2Bf6&X-Amz-Signature=17ed977465da63c9a0cfaa5963db9b4fe907de2ceb77dbf25cd3def266fe2a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

