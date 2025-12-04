---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CZP24K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2BvoFcyiu6f5IucZv%2Fj0prOnDiiuLY3FZ8OeP5jJmEbwIgARXMsIgZvDhJbtwo%2BJoXoi3iyRM3ilDKZERg4JeWrfEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCITp0r9iWRW7B6abSrcA%2FtFRiiYa6IoGGJUEMhGHQZ4qsN2MwYb6BI%2BaOKAV5jQ1A0lg06DdZ1gwadyZcgDXpHtZPtAJ06fA0Ilh17PwSCpmZ85XJ41bjoK3ipnrUtsWmvdY55ztU9olEBMczoAFsG7e9jpWb5TiBzBQSyizw5R0qhYVKsCcFYYVRShAFZjralfYOMrWpT3TBNykLqh2VfPCbVKMQTi9wb94pyWPKEp2W1CSutWo3dRJiZ9OghGWBCWUh75SA%2BJWNkmZ8gYjMPoRMiVehUv4BGXPQ0MzUeeQ%2BErxwObY6%2FufHnWhtEdvdFX%2B%2BEp4HS2Egy0w5Le4GwLDwAHVn9w3O5fZ0Mj6wPH1Yriiby1iYyzuR1a%2FUXE00%2F%2BSKBSVvVNxTkyIgr98%2FnZBKlA3iN%2BZtlfs6Px4hZmvbfW%2FDc7FGmQtptZWH1PJYZYBjVowWwCrZOwSfvIGAIq%2FMxYOQ%2B3EHv5%2BLRas8ljRvs2L2C8v3SGb7HX%2B3PXYLcYGok6MrBhDp4J%2F3HHKIlgLgYgADcpOoI5dmr%2BuCYEbJzUkZTpyxunehbu4ltILruhOaR92yVjmRJ9u70C4QKPFuVHO%2BlzqSBs3ub%2F0UrlFKfGSGwkr%2F%2BIybuG3hN%2Fl%2B0LadfkVkrys78OMIiVw8kGOqUBfEkVt0VIfTGzaZkwXCyQjpgUQikJT4rQegfqT27UWbSAusWGxVF1XG7qqhRKEr%2F1NSEDi89RCU%2Bs8aJqV2FnKU0oqLKb86qn7UYF1iDc5HsXO1JQT6qXAcJrnUHOtJu9J6WVC7mLnmPvpJVcwNXxWLpbvhOfYcUsPCskPBfZA7YCM9NnMcNuhGC9tkxzgEpyO2eemO3ESQo%2BvIusrAyg%2FHJdWDI0&X-Amz-Signature=245a9276c2c169bf5f023d8d6144e971126c0991f95547cf15dce9d1dfa5afe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CZP24K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2BvoFcyiu6f5IucZv%2Fj0prOnDiiuLY3FZ8OeP5jJmEbwIgARXMsIgZvDhJbtwo%2BJoXoi3iyRM3ilDKZERg4JeWrfEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCITp0r9iWRW7B6abSrcA%2FtFRiiYa6IoGGJUEMhGHQZ4qsN2MwYb6BI%2BaOKAV5jQ1A0lg06DdZ1gwadyZcgDXpHtZPtAJ06fA0Ilh17PwSCpmZ85XJ41bjoK3ipnrUtsWmvdY55ztU9olEBMczoAFsG7e9jpWb5TiBzBQSyizw5R0qhYVKsCcFYYVRShAFZjralfYOMrWpT3TBNykLqh2VfPCbVKMQTi9wb94pyWPKEp2W1CSutWo3dRJiZ9OghGWBCWUh75SA%2BJWNkmZ8gYjMPoRMiVehUv4BGXPQ0MzUeeQ%2BErxwObY6%2FufHnWhtEdvdFX%2B%2BEp4HS2Egy0w5Le4GwLDwAHVn9w3O5fZ0Mj6wPH1Yriiby1iYyzuR1a%2FUXE00%2F%2BSKBSVvVNxTkyIgr98%2FnZBKlA3iN%2BZtlfs6Px4hZmvbfW%2FDc7FGmQtptZWH1PJYZYBjVowWwCrZOwSfvIGAIq%2FMxYOQ%2B3EHv5%2BLRas8ljRvs2L2C8v3SGb7HX%2B3PXYLcYGok6MrBhDp4J%2F3HHKIlgLgYgADcpOoI5dmr%2BuCYEbJzUkZTpyxunehbu4ltILruhOaR92yVjmRJ9u70C4QKPFuVHO%2BlzqSBs3ub%2F0UrlFKfGSGwkr%2F%2BIybuG3hN%2Fl%2B0LadfkVkrys78OMIiVw8kGOqUBfEkVt0VIfTGzaZkwXCyQjpgUQikJT4rQegfqT27UWbSAusWGxVF1XG7qqhRKEr%2F1NSEDi89RCU%2Bs8aJqV2FnKU0oqLKb86qn7UYF1iDc5HsXO1JQT6qXAcJrnUHOtJu9J6WVC7mLnmPvpJVcwNXxWLpbvhOfYcUsPCskPBfZA7YCM9NnMcNuhGC9tkxzgEpyO2eemO3ESQo%2BvIusrAyg%2FHJdWDI0&X-Amz-Signature=badfb22afc5cbb84d2fcaecbf78b3784ab8898aac09fc4ff91449e6c31305307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

