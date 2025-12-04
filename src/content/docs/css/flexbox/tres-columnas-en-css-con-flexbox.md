---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AB3AUXA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnM2pjaDcG1iUFSpS2tpfxQk9DZmWWfzeuOyM5MjFYXAIgKNDjreWD74pGz9kuNiA4dbRK54pFPCdUim8sL4niUloq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDEGiKiCj152oiBurCrcA9VYaH8%2FBP4r9oSG8WeTmDaqEY3X8PrQ%2BdzdwPdF0%2BoONIw%2FOJUZeSMkRTRTaxbvuXRUsb2bJW7KNM6VVLnTYuuK0HZRsXkA38FYEVb6%2FL7vGK%2FSTRD03iUYMn%2BphMw%2BgFykKQ%2F2xBh9Axa4wPplpZc7RcekiyvtPgNm1b4ZHXTmN3tWq6Aao2nxBRCEgDhOzpALzOArGSQ13ujnlIj6UFgS9tpr4seCABQv%2BM6Wgl8LER0eLUsYclggOlwKkJkkRg8shidDVJXDGl0u2U58RVQUytXK8iFr%2FSflsiaO0Z9tDLM6GVmEF1V2MgdOPaOMdWrDx9ac7sLE4NhHrDrmmIPJIZUCT0fk8zPdJH4khXLAZCdVYJjqDTN%2F13eYw%2FzQdmf69oer5E%2FXkZkDEAnPF4VUo%2BJ3CIJwELFvpUOdIGLF%2FMvcW5W9%2Bmr6qler0W3AcJqXoIdsCnY7tBU%2FVkgNZ5dm0dIkBTTcXlOwvQXs0rZOBgziyCZW4TT53M5TYho9rG5lAwb2qfo4FKI3rDvdhNqmkKvRayQyOclxTpR%2FCJSMZKRvEVbV0VoomF9uSvEo41lAe%2F4Z0aaPFrpSHJ5KfluMZiuJmaojiX%2FoTYDacTa5lTXYHKC2OFMkfr0NMNiQxMkGOqUB%2BJ8bxUiNHNnKKFB8tTu7uoUqpfOKvt3N1vSd%2FNSyLnfIVD50oM7wxL9EkrQYBlFtkgR9I5x%2FQ%2F142RG8cR2bf5ydGI6iTHo4ES70Im69Tz0YfKU%2FUxGSvXBkGw1dbxyQ%2BWFjHzELO5%2Bf69at9a2y7EnbN7d3GnngyGdAaNlRpx34jjS0vnlt39oZfVIBv8SXBKTCFB061KhYumh%2BLrRdcqd20tcW&X-Amz-Signature=71ec8dfe3f8e3077c786594e419537c3ac412f127c6ce73a36e389c52a962e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AB3AUXA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnM2pjaDcG1iUFSpS2tpfxQk9DZmWWfzeuOyM5MjFYXAIgKNDjreWD74pGz9kuNiA4dbRK54pFPCdUim8sL4niUloq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDEGiKiCj152oiBurCrcA9VYaH8%2FBP4r9oSG8WeTmDaqEY3X8PrQ%2BdzdwPdF0%2BoONIw%2FOJUZeSMkRTRTaxbvuXRUsb2bJW7KNM6VVLnTYuuK0HZRsXkA38FYEVb6%2FL7vGK%2FSTRD03iUYMn%2BphMw%2BgFykKQ%2F2xBh9Axa4wPplpZc7RcekiyvtPgNm1b4ZHXTmN3tWq6Aao2nxBRCEgDhOzpALzOArGSQ13ujnlIj6UFgS9tpr4seCABQv%2BM6Wgl8LER0eLUsYclggOlwKkJkkRg8shidDVJXDGl0u2U58RVQUytXK8iFr%2FSflsiaO0Z9tDLM6GVmEF1V2MgdOPaOMdWrDx9ac7sLE4NhHrDrmmIPJIZUCT0fk8zPdJH4khXLAZCdVYJjqDTN%2F13eYw%2FzQdmf69oer5E%2FXkZkDEAnPF4VUo%2BJ3CIJwELFvpUOdIGLF%2FMvcW5W9%2Bmr6qler0W3AcJqXoIdsCnY7tBU%2FVkgNZ5dm0dIkBTTcXlOwvQXs0rZOBgziyCZW4TT53M5TYho9rG5lAwb2qfo4FKI3rDvdhNqmkKvRayQyOclxTpR%2FCJSMZKRvEVbV0VoomF9uSvEo41lAe%2F4Z0aaPFrpSHJ5KfluMZiuJmaojiX%2FoTYDacTa5lTXYHKC2OFMkfr0NMNiQxMkGOqUB%2BJ8bxUiNHNnKKFB8tTu7uoUqpfOKvt3N1vSd%2FNSyLnfIVD50oM7wxL9EkrQYBlFtkgR9I5x%2FQ%2F142RG8cR2bf5ydGI6iTHo4ES70Im69Tz0YfKU%2FUxGSvXBkGw1dbxyQ%2BWFjHzELO5%2Bf69at9a2y7EnbN7d3GnngyGdAaNlRpx34jjS0vnlt39oZfVIBv8SXBKTCFB061KhYumh%2BLrRdcqd20tcW&X-Amz-Signature=a913734d152d194fefff0ae56a87e099c78f8e9b88796f9ea39eec2bbd3004cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

