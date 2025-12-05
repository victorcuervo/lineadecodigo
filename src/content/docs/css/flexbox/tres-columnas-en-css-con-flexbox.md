---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCGTOMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnPJtCbV8DEBaw4aXWirv2SzP7ibjVpAOGiZ77sg2g4AiEAuPUFn5W3lUbeHKWVAF3AduSZIvPIpzW8ZWnjY9P%2FuT8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBgJhXjSMpFAZ%2FuavircA9lVcPRXAjd1ALPinZ1zV8omehow8Ujoxf%2BzCkiWD79NRxwgbYzHRJId2Bagwz51hXN9TkDNEkPAg%2FjR0DcZCnGdbxneBR1F899ypwJZAv5Jgl4nmyrZlLa1PBoyEkJ7Nc%2BeA%2BjdQVXBdFTYJLiSNI5ieh5tiWKpsyOXaVHTlcInDlbNXyJt68giagHulb7sYpmecM%2Bt4AMhLu4Aqy8RJKmtRdrIHf6csMDg%2FyHqIym%2BmQ57xHZ2%2FuPnhhwB9IMtNuX4w8LxB4MQcewAwIfMOJl4vaZPmtuouKTpU%2B%2F8O1cFcE602wDDXLZQZ948Cy499ZatB33hHNbpagLm%2B%2Fb9m6kgOPXnm4jRJQB5YVKrd2EGpWVAZt0okhswe5YheUeCBD%2FVq%2FWq7UCN946GtIg9TQcm0PuJPUuoYLQhG2TJiOktzL2F%2BCzR%2BvEMGw83JzwLPe5ZpOn8e%2FGQsJLLt%2FVxRWx4n%2BD%2Fq57SuxMt8Ob%2FNNxzpKeepWKTjMgOQLIUHSqv2hqkBsbjY1Ocj36PHgxV%2Fcj8GHJrMRHPzxo0Gp3ykiuuoLknO4kwn1la1rV6msdy5CCPzFosKfcMO3%2FHIt3eNycTIGi6eBrd13Wra7RHwHG6OLXLoU60ZdPMwJG7ML2MyMkGOqUBOCRRnA%2BVR4bcjM8Eqbqa9eIAsfkoKs3pI3qXyrH72nfkH2xRUDmoqjgDWJItsp2XN16DVQyKsfDl9oqCTBYTnGNWjgkn4Ciddh7rR%2FseTGJhXDpPmWqzuzCRZjtAYGzQTHUY%2BlKcUCjP%2BMZ7EUGPL%2FrQdyCht%2FcIx75r5MWaQoYnQF6%2Budd3t%2BQjf1U01%2F7hbC6oWBvOsheoazP7wqqlWdTZ%2FfpX&X-Amz-Signature=2da60f3d49f8142d7106dbd2c6d6d48ab6d8dee9d64b262a233ea60800b6c9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCGTOMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnPJtCbV8DEBaw4aXWirv2SzP7ibjVpAOGiZ77sg2g4AiEAuPUFn5W3lUbeHKWVAF3AduSZIvPIpzW8ZWnjY9P%2FuT8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBgJhXjSMpFAZ%2FuavircA9lVcPRXAjd1ALPinZ1zV8omehow8Ujoxf%2BzCkiWD79NRxwgbYzHRJId2Bagwz51hXN9TkDNEkPAg%2FjR0DcZCnGdbxneBR1F899ypwJZAv5Jgl4nmyrZlLa1PBoyEkJ7Nc%2BeA%2BjdQVXBdFTYJLiSNI5ieh5tiWKpsyOXaVHTlcInDlbNXyJt68giagHulb7sYpmecM%2Bt4AMhLu4Aqy8RJKmtRdrIHf6csMDg%2FyHqIym%2BmQ57xHZ2%2FuPnhhwB9IMtNuX4w8LxB4MQcewAwIfMOJl4vaZPmtuouKTpU%2B%2F8O1cFcE602wDDXLZQZ948Cy499ZatB33hHNbpagLm%2B%2Fb9m6kgOPXnm4jRJQB5YVKrd2EGpWVAZt0okhswe5YheUeCBD%2FVq%2FWq7UCN946GtIg9TQcm0PuJPUuoYLQhG2TJiOktzL2F%2BCzR%2BvEMGw83JzwLPe5ZpOn8e%2FGQsJLLt%2FVxRWx4n%2BD%2Fq57SuxMt8Ob%2FNNxzpKeepWKTjMgOQLIUHSqv2hqkBsbjY1Ocj36PHgxV%2Fcj8GHJrMRHPzxo0Gp3ykiuuoLknO4kwn1la1rV6msdy5CCPzFosKfcMO3%2FHIt3eNycTIGi6eBrd13Wra7RHwHG6OLXLoU60ZdPMwJG7ML2MyMkGOqUBOCRRnA%2BVR4bcjM8Eqbqa9eIAsfkoKs3pI3qXyrH72nfkH2xRUDmoqjgDWJItsp2XN16DVQyKsfDl9oqCTBYTnGNWjgkn4Ciddh7rR%2FseTGJhXDpPmWqzuzCRZjtAYGzQTHUY%2BlKcUCjP%2BMZ7EUGPL%2FrQdyCht%2FcIx75r5MWaQoYnQF6%2Budd3t%2BQjf1U01%2F7hbC6oWBvOsheoazP7wqqlWdTZ%2FfpX&X-Amz-Signature=433c50045e77d5d2d40a406315be9337bce065efc3a6130e8bdd5d6ce3071145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

