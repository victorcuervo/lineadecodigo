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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWX5B7S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTAoH7lNV2lFRnSaAY2QecVDVNYb3QG6vICWz63x9WhAIgNXZuNJBxBbUd9094LpFN5FuDNRFfjPAR45ZlxFZRNr0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDA09qCmfG%2BQAfIo7dCrcA1gpc0%2FKBRkVXVRwWhGUrp6yAfREv6YPQEW008nii%2FygWQvbxj9bgqipNz7Vi8YGYwt1ScRdS3lbYB0maXLY%2BehNrG%2BSZydzvrlAltDtwka1Ky7K72MZsMyso1XjVATVxLUW7dEWIYNfbSSSVSuRjiUOZEVVjLk79bmXlLQRJsm9jkWgRmaLy7vJf9ccvzBhDt4vsTKBxtjnWmfb4Ax2AEZMp9%2Fpl01PSz4FG8shDyeL1nMnWfDAPgIYVXkeUu4TYLyzP9MSnk074t5O3EDXjJ5BHIsBxapKOFmlkWLZ8hekS9xWFW36ag5FAcMliGmaf%2FBUmNYLHAJki1CPfvwS82zEPuvUFoFqNCPx%2BXtdhYMd%2Bl2fCueL%2F50S0PxczkqyoOXO4omnoH0N%2FY8%2BJqszdbPAFRdcNsJ5JtLKC3iNq3ErURx6bwP%2B8b7Z98x8KjvukQRO75ctFsDXcyKqkccTPo9uvmWBK%2BsZUK9kPSkxVDzuCrzrNgYvRFMS7xYfmYXHBRl41c55q6O%2BJnl149aZjAYSvb48HcmnE6r9XmYRUi3QJcr6QeZri2AmZDL85Jvhcb%2BASIptNRQRhYkqmGDYDYU%2FOi8TLIsaLLO2rBaBBRxxHPcjRZ8RYU%2BLFmW9MIO6v8kGOqUBFOMgT9Q8wIQCcn73bqFe2%2BAusYx9OqvXsUUgdmxsksr6i5BKBw5XUe7LCptqQUgFVmK4sXfg2vs5p9SWtB1VhqyjZwg5%2Bziw4IBzVHPb92aepWtm17m9CBnAIMiHkL5C%2F0OD8aPfBjDjQzP8LJ3AxOy6mkbTSKCcKNGmsQucQLm7WOJUXezkFoUy5Pmg6o%2FLDVxSPLqGsTKpk%2FijuLt8lYncpSD6&X-Amz-Signature=6c27cfce2616438c40b457716ae2982f6f15aa9a5986f7e303511ada05c25dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWX5B7S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTAoH7lNV2lFRnSaAY2QecVDVNYb3QG6vICWz63x9WhAIgNXZuNJBxBbUd9094LpFN5FuDNRFfjPAR45ZlxFZRNr0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDA09qCmfG%2BQAfIo7dCrcA1gpc0%2FKBRkVXVRwWhGUrp6yAfREv6YPQEW008nii%2FygWQvbxj9bgqipNz7Vi8YGYwt1ScRdS3lbYB0maXLY%2BehNrG%2BSZydzvrlAltDtwka1Ky7K72MZsMyso1XjVATVxLUW7dEWIYNfbSSSVSuRjiUOZEVVjLk79bmXlLQRJsm9jkWgRmaLy7vJf9ccvzBhDt4vsTKBxtjnWmfb4Ax2AEZMp9%2Fpl01PSz4FG8shDyeL1nMnWfDAPgIYVXkeUu4TYLyzP9MSnk074t5O3EDXjJ5BHIsBxapKOFmlkWLZ8hekS9xWFW36ag5FAcMliGmaf%2FBUmNYLHAJki1CPfvwS82zEPuvUFoFqNCPx%2BXtdhYMd%2Bl2fCueL%2F50S0PxczkqyoOXO4omnoH0N%2FY8%2BJqszdbPAFRdcNsJ5JtLKC3iNq3ErURx6bwP%2B8b7Z98x8KjvukQRO75ctFsDXcyKqkccTPo9uvmWBK%2BsZUK9kPSkxVDzuCrzrNgYvRFMS7xYfmYXHBRl41c55q6O%2BJnl149aZjAYSvb48HcmnE6r9XmYRUi3QJcr6QeZri2AmZDL85Jvhcb%2BASIptNRQRhYkqmGDYDYU%2FOi8TLIsaLLO2rBaBBRxxHPcjRZ8RYU%2BLFmW9MIO6v8kGOqUBFOMgT9Q8wIQCcn73bqFe2%2BAusYx9OqvXsUUgdmxsksr6i5BKBw5XUe7LCptqQUgFVmK4sXfg2vs5p9SWtB1VhqyjZwg5%2Bziw4IBzVHPb92aepWtm17m9CBnAIMiHkL5C%2F0OD8aPfBjDjQzP8LJ3AxOy6mkbTSKCcKNGmsQucQLm7WOJUXezkFoUy5Pmg6o%2FLDVxSPLqGsTKpk%2FijuLt8lYncpSD6&X-Amz-Signature=33052baded056a05d3f465116f217a9e4bcfb1b93cad002b48671c0928510fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

