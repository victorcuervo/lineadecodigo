---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKP7Y27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDahgy98KT7buKrNpyN4NRcySII4pBEde0jLCT2Zj9upwIgH%2FMyqbhzxv68eRnO1FBIJaGlx3Go5JJeBB3nrKDRm%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgAoALUKZaOYzWYpircA37or8%2BikmzGV3dwAHEXDc%2F3f%2FKeibWypASe%2Bh4CghclaFj3mwHUTmdQe10x%2FYSm%2Bf8V9p7XAS8lEBGU9ji0OiIuriTeuwtAcJs5on0a6ig42Y53hPJioCJ0L0qCTA53YKVKqvgXQdeLaV8W%2B%2F8lnjouuRUuHzj0mz0pIyefS8Of6ASI9huWpoDd04RBU3o4BABMcz2zjZ2I2bS6jmocwr1I0Iv8BGPHHBFai2rsZsmAyj3sRU621lQnyiCComhtSuV2NGdCxJ%2BTec8jr3cKqo4tosSUZZ9DZzc6yYF2gGTAacxwoqbL6hI9RjfC72g8iT70zG9EgrDNk6q4Qu%2FS3WeGOxCbxxTiLD91MrbzUXS%2Fv64woluX%2FefWBIkgDsNdz6x2Wwp08hPBVU%2B75PIinOTZKc2%2FqYNSOodPYTrKZPvsR0CPGWwcdoHFuOgPQtl6mZMfZ%2Bf96tAzHcbN07PcbnSP6azgfVzWvShaNHWYCwkmKl8xmr2JFhuNMPInAxChdNuamm2pYX2jsqxazX%2B0AHJXo1rgqDCt%2BI2pDqUtuaCdt06Vv0WeaJYhVF1TLT40TMweeTKiOgJr%2FEUOEmEWCs3pS4Nt2iJHNhUTs%2Fa7Wd225l94ArNbh5SSrphUMOLl3skGOqUBDz5XseysHGdC7U2ynkhK%2F2D8ygMZSi5mELqdpTO54kOD8vt5L9PYEgYSoRpPHyM2T8I23HguCGOQ8yqvz0erOQR5NhTQa%2FSmSj8K%2F4PCVqfZ5rmthlHQcdHqhwbeEffteQebky4TCYrRgNd99tgdn8vPEU2merPJ7DOm14mS92HLKekuPJwR4VoT2YX78D7bfX%2BFNfP%2FrwSLd5s2sblF8FNEEkKH&X-Amz-Signature=798ac530caffb92a9e259368c9cefd2725ef5b8a71ca480546e7f515dbfb797f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKP7Y27%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDahgy98KT7buKrNpyN4NRcySII4pBEde0jLCT2Zj9upwIgH%2FMyqbhzxv68eRnO1FBIJaGlx3Go5JJeBB3nrKDRm%2FkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgAoALUKZaOYzWYpircA37or8%2BikmzGV3dwAHEXDc%2F3f%2FKeibWypASe%2Bh4CghclaFj3mwHUTmdQe10x%2FYSm%2Bf8V9p7XAS8lEBGU9ji0OiIuriTeuwtAcJs5on0a6ig42Y53hPJioCJ0L0qCTA53YKVKqvgXQdeLaV8W%2B%2F8lnjouuRUuHzj0mz0pIyefS8Of6ASI9huWpoDd04RBU3o4BABMcz2zjZ2I2bS6jmocwr1I0Iv8BGPHHBFai2rsZsmAyj3sRU621lQnyiCComhtSuV2NGdCxJ%2BTec8jr3cKqo4tosSUZZ9DZzc6yYF2gGTAacxwoqbL6hI9RjfC72g8iT70zG9EgrDNk6q4Qu%2FS3WeGOxCbxxTiLD91MrbzUXS%2Fv64woluX%2FefWBIkgDsNdz6x2Wwp08hPBVU%2B75PIinOTZKc2%2FqYNSOodPYTrKZPvsR0CPGWwcdoHFuOgPQtl6mZMfZ%2Bf96tAzHcbN07PcbnSP6azgfVzWvShaNHWYCwkmKl8xmr2JFhuNMPInAxChdNuamm2pYX2jsqxazX%2B0AHJXo1rgqDCt%2BI2pDqUtuaCdt06Vv0WeaJYhVF1TLT40TMweeTKiOgJr%2FEUOEmEWCs3pS4Nt2iJHNhUTs%2Fa7Wd225l94ArNbh5SSrphUMOLl3skGOqUBDz5XseysHGdC7U2ynkhK%2F2D8ygMZSi5mELqdpTO54kOD8vt5L9PYEgYSoRpPHyM2T8I23HguCGOQ8yqvz0erOQR5NhTQa%2FSmSj8K%2F4PCVqfZ5rmthlHQcdHqhwbeEffteQebky4TCYrRgNd99tgdn8vPEU2merPJ7DOm14mS92HLKekuPJwR4VoT2YX78D7bfX%2BFNfP%2FrwSLd5s2sblF8FNEEkKH&X-Amz-Signature=20c2b2a5bdf77ad6e4961ad6770626dfcd9ed4867bbfa197f82eac039653f0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

