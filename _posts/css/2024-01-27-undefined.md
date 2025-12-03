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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7JKGNO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGF%2BoWK%2FcEc84OTZQB2JvjMEMY103SbI956Ju9nlbmTlAiEA84cestgk6jH1GBBpPPLDCDZy7Ai3ayb0hLFFHFwxdyQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDN%2Bo%2BVAlWknAa2I95SrcA0R0IsM5izCDA0Jp7vj7PCWAODP%2FR3NDSlaROq2GCd6TbPSOhawg71uzOqVbMpYCRv4SqLWbrYDZkmpksx%2BjUmYdKtPM8WtGGnOa9qSwEOAoWjXDO3HtfkckEYsXodanmnnNm7JtnL6kDczl62t9dqf4fpTU1pMc4leAlMy2UV5CBRMgX%2BHy3OiJm5namm3kGhTfzTcS5i7HcBI4vctkW3feaWuOYAsUPUOYzIabwYNXgo9PhSUDsHAwtNIN3pNDVg1%2FJ8C6TCwGszdMdTam3mFt2aV0Y4Bb00IASk7cMAy4Sk33rBFJXyixiMGHOrmSdPdV5FE8y2QW1KkD%2B8VvfGsYnNh1GTZaLxFf7OQWYydoq3qSz33QdfTRiMO%2FQCMdrzJQqxBgjl5FdYsaWqNz2Hcb2sDWWq4AVsT8vW3jn9qfkzb%2BcBgvDVn8Mf3jguuNMLn4%2BO%2FkPMIFGR0Sd71lcgxldlHdUC42skT%2FHKQ2fz%2F1OH0UjUezojGgAZClF4jU4XiBOZLisOz7bYnY65KUIspkGah6RdARMqTTPEsIu%2BreBMyJHaHl7R3anBzcuTj7t6xu91PuCwKKQAyCRl6f2SoFlnR0vX7MFRHPcJEs8JmgpONdUqMix2m%2BF5BZMNXUv8kGOqUBDysfvcXLFHnKTfCI5WgQvTkKzhajaUPBhAxaZahM4lUM1cXpC1jnxJ5TCgmkQh7EGq5HR%2FXMwhFfXGFoyTQuXkf2dUaNpXe8R3VZMviqrXShQ2yQFjCM0PP0Pujc88TK4syBqNmSia54kwySfT0IO%2B7RRfinYXVL3IKGtryVzDo9YmXAOpwUall4bOo3JinIz%2BPqTeHVFNy9RepTPYZaDESKw0yq&X-Amz-Signature=504f7af197fc86df94013f418c20b796b44e6e7ca78cb1a05b7c484d3ce2a545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7JKGNO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGF%2BoWK%2FcEc84OTZQB2JvjMEMY103SbI956Ju9nlbmTlAiEA84cestgk6jH1GBBpPPLDCDZy7Ai3ayb0hLFFHFwxdyQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDN%2Bo%2BVAlWknAa2I95SrcA0R0IsM5izCDA0Jp7vj7PCWAODP%2FR3NDSlaROq2GCd6TbPSOhawg71uzOqVbMpYCRv4SqLWbrYDZkmpksx%2BjUmYdKtPM8WtGGnOa9qSwEOAoWjXDO3HtfkckEYsXodanmnnNm7JtnL6kDczl62t9dqf4fpTU1pMc4leAlMy2UV5CBRMgX%2BHy3OiJm5namm3kGhTfzTcS5i7HcBI4vctkW3feaWuOYAsUPUOYzIabwYNXgo9PhSUDsHAwtNIN3pNDVg1%2FJ8C6TCwGszdMdTam3mFt2aV0Y4Bb00IASk7cMAy4Sk33rBFJXyixiMGHOrmSdPdV5FE8y2QW1KkD%2B8VvfGsYnNh1GTZaLxFf7OQWYydoq3qSz33QdfTRiMO%2FQCMdrzJQqxBgjl5FdYsaWqNz2Hcb2sDWWq4AVsT8vW3jn9qfkzb%2BcBgvDVn8Mf3jguuNMLn4%2BO%2FkPMIFGR0Sd71lcgxldlHdUC42skT%2FHKQ2fz%2F1OH0UjUezojGgAZClF4jU4XiBOZLisOz7bYnY65KUIspkGah6RdARMqTTPEsIu%2BreBMyJHaHl7R3anBzcuTj7t6xu91PuCwKKQAyCRl6f2SoFlnR0vX7MFRHPcJEs8JmgpONdUqMix2m%2BF5BZMNXUv8kGOqUBDysfvcXLFHnKTfCI5WgQvTkKzhajaUPBhAxaZahM4lUM1cXpC1jnxJ5TCgmkQh7EGq5HR%2FXMwhFfXGFoyTQuXkf2dUaNpXe8R3VZMviqrXShQ2yQFjCM0PP0Pujc88TK4syBqNmSia54kwySfT0IO%2B7RRfinYXVL3IKGtryVzDo9YmXAOpwUall4bOo3JinIz%2BPqTeHVFNy9RepTPYZaDESKw0yq&X-Amz-Signature=398e78b646e6bd3b34414860d46a0278e08d6c4f71b78f219d77d77d36f9e7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

