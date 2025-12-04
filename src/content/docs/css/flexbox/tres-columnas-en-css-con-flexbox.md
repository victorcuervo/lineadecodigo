---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP472UO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCaDZ4pzU5dby4RMqt8jQQ7PsIMKJEbF51mJ2SQcDaqxgIhAN0MLzjqzk5%2Bg2s%2BvSiZzHtnGmFwjphB%2FoXb1L6JGW%2FOKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGjBeIMo8GvhNHj0Qq3APFZUPODxCT4M%2BH%2FDWyI%2BdhAziBdWkxoafIQ7JoVuf2SjdDH%2FfN3TLwraKAp5z6WTUv3ctfzEZDFkXvOMSBRFFxQAJrwnxjiciAiVkm1K6eLGKAtfANc6FoK1tzXvy3Y3IcdKnHDv3GbOkpltp7W5auXLBaZ9PbrXDN5f0QNfMclF1u2VMbkGfVQ82spKdz%2BQzgeHrMfq3Cyv5rAjPOxe2bsxVfqCnq4PHMYvQxQOaeB5xc2JFS9P96PA%2Bx1Hj0ny7dpb3tGjCPmZ6%2BflN21BgWFVahieXE%2FljcSzQ5dyofgmGctQRZJouYbzreZEn0gbNH3RhHGXAmmBoT7eZuMDjl7Sgrg2qNN%2FxBGAy6Nt5oL8vh0fDgTstdAyb0Fst9OdvI73GjJ5dvgz0pOmVyZmP49165x2YmmESm68LaiR%2FINmfd%2BKkzNpr3KBh788U2IFAv%2B35xDFG6ZAYZXSxepi%2B1jhsy2GtA%2B4t%2Fep4eh02GXz%2FZKA0HsjFi09jKtxQMPRlZs0vEGQiiMCQgA0RIpCldcRdDV9tDNw%2FioLsWfXLgSH1D%2FbOllulwq1SoARkv8h5dGFs1qoGHoXNU8B9%2BqeufErRwsrXxmDx61yqy5uYtvQXiGwJyqbJWWPqhbzDZvsbJBjqkAaZrhHQtYMwJ9GC4G9NLDHotEA8H5mnDNYIDfb6MbrTIng6AB3fx5yOJDm%2BVFK31jI3dBEnpDVONYZWQyceHeVJaM%2FqkOcdpiKW0v3fnuZR%2BgrLmHwt5TuAyrJeVmh1bqT43tYelJI8GJ99VA86ePc3%2Fhbd8B22C43ys7O65C43M4dF5EQ%2FK58KOE9h%2Fqdj8xQ%2Fn6EHCGSE9ILJvsHz80mP395ea&X-Amz-Signature=a6fdbedb3aac8e9e254200692b4ca4907ab2cc81e79c6f133d841b79bad08878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP472UO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCaDZ4pzU5dby4RMqt8jQQ7PsIMKJEbF51mJ2SQcDaqxgIhAN0MLzjqzk5%2Bg2s%2BvSiZzHtnGmFwjphB%2FoXb1L6JGW%2FOKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGjBeIMo8GvhNHj0Qq3APFZUPODxCT4M%2BH%2FDWyI%2BdhAziBdWkxoafIQ7JoVuf2SjdDH%2FfN3TLwraKAp5z6WTUv3ctfzEZDFkXvOMSBRFFxQAJrwnxjiciAiVkm1K6eLGKAtfANc6FoK1tzXvy3Y3IcdKnHDv3GbOkpltp7W5auXLBaZ9PbrXDN5f0QNfMclF1u2VMbkGfVQ82spKdz%2BQzgeHrMfq3Cyv5rAjPOxe2bsxVfqCnq4PHMYvQxQOaeB5xc2JFS9P96PA%2Bx1Hj0ny7dpb3tGjCPmZ6%2BflN21BgWFVahieXE%2FljcSzQ5dyofgmGctQRZJouYbzreZEn0gbNH3RhHGXAmmBoT7eZuMDjl7Sgrg2qNN%2FxBGAy6Nt5oL8vh0fDgTstdAyb0Fst9OdvI73GjJ5dvgz0pOmVyZmP49165x2YmmESm68LaiR%2FINmfd%2BKkzNpr3KBh788U2IFAv%2B35xDFG6ZAYZXSxepi%2B1jhsy2GtA%2B4t%2Fep4eh02GXz%2FZKA0HsjFi09jKtxQMPRlZs0vEGQiiMCQgA0RIpCldcRdDV9tDNw%2FioLsWfXLgSH1D%2FbOllulwq1SoARkv8h5dGFs1qoGHoXNU8B9%2BqeufErRwsrXxmDx61yqy5uYtvQXiGwJyqbJWWPqhbzDZvsbJBjqkAaZrhHQtYMwJ9GC4G9NLDHotEA8H5mnDNYIDfb6MbrTIng6AB3fx5yOJDm%2BVFK31jI3dBEnpDVONYZWQyceHeVJaM%2FqkOcdpiKW0v3fnuZR%2BgrLmHwt5TuAyrJeVmh1bqT43tYelJI8GJ99VA86ePc3%2Fhbd8B22C43ys7O65C43M4dF5EQ%2FK58KOE9h%2Fqdj8xQ%2Fn6EHCGSE9ILJvsHz80mP395ea&X-Amz-Signature=39573487409fc4386fbfe0531497a9c0b1754f38f496b3f9b99f45a3b6c6c3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

