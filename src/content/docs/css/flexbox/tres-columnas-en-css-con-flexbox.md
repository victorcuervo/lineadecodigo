---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFJASUC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWIRecCcGcH4VeSQheenI%2B%2BremHnPhtm%2BcbR5W8%2BsGoAIhAOCkBhfbMjaaigFHjwxUNzNdjZHyBV125V72s0tEGOxhKv8DCHoQABoMNjM3NDIzMTgzODA1Igwayy6CxsZvlb4Eim0q3ANlevfbW4E4Zyhg%2Bxdnfx8Cdvp7cJuK4oHyJNK7gfgegCJPWOfngwLvr2yCWYMqGX73oc3gbpsPDhi3ojKUluuAtlmpgAK0OyHPT2ogkhkOPa1iTrMD%2Bx%2FzZsRFMUQ1XTCtKU4kDZvTk0gPfajN31I6pL5D7kf%2Bi2dbR8DQcmcZKKhabQc8dezoBPMy1ka936mhNj2o3VFYwuSRNghyOptLL5Ue2K57GAyP2jEPG4QzoMVEf2honwMLVSpuwy%2Bvs9%2BEpVs%2BmZu7rEclKZGJnongMeRJFIWL%2FZt2JHa44bAjTtI2N%2FaRSLMwKXKQBG2QiE6rrAe2LENU0WPbc9HmFQsJnLm4507HRZgS1UMFxcKCfzkrPSdc2QGz8nEjzZhcGVG1IyMd0qWLBrMYASNZwIzKF5reeyGfaUOxCVwolJod2ana7WM0nlaZY8O8cybfjgbKFT%2B%2F8iaa%2FhYEGk6ikKBrbsEB5w23Y3Y9%2BuGOTTem1zoJFjF4ttaUGENvZblYuG4jWD6pPWv%2Fd2D2lTa5G6ttHUquuV%2BrufusGgdoTjGb5TNFAXHRkv2NKyUNWqXfyXOubUASrOBWR3xfEPIvHCrcX%2FoH0SJX%2FzypxrzU4Zyeh1qJ2B%2F1g0XDQu6jPjCcytHJBjqkAav2D1wdsRrAAvkIiGwTNzYBKmjoHMno8RNbMtyqDO2bu1EnDKf3HWkP1ogVo1BiRSZL9BEpKvhqOVC3B7QkN0Kb9ljT8154GJSuNhsi%2FQDdpSTkh2mKcyG%2Fj7%2BW0xCch6Wfg4bGiI9HPl3mTy5RXMJZDBO0%2B5vu%2FIKVT3Ax40NRrnSC99IGJz0D%2FK3lrYqvyPMXxYyc4diras4ow6N2SVD1ydu5&X-Amz-Signature=dcd72dd989ffe285b8858402165a8bf981c1aa760f5444b776c181374fa2a81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFJASUC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWIRecCcGcH4VeSQheenI%2B%2BremHnPhtm%2BcbR5W8%2BsGoAIhAOCkBhfbMjaaigFHjwxUNzNdjZHyBV125V72s0tEGOxhKv8DCHoQABoMNjM3NDIzMTgzODA1Igwayy6CxsZvlb4Eim0q3ANlevfbW4E4Zyhg%2Bxdnfx8Cdvp7cJuK4oHyJNK7gfgegCJPWOfngwLvr2yCWYMqGX73oc3gbpsPDhi3ojKUluuAtlmpgAK0OyHPT2ogkhkOPa1iTrMD%2Bx%2FzZsRFMUQ1XTCtKU4kDZvTk0gPfajN31I6pL5D7kf%2Bi2dbR8DQcmcZKKhabQc8dezoBPMy1ka936mhNj2o3VFYwuSRNghyOptLL5Ue2K57GAyP2jEPG4QzoMVEf2honwMLVSpuwy%2Bvs9%2BEpVs%2BmZu7rEclKZGJnongMeRJFIWL%2FZt2JHa44bAjTtI2N%2FaRSLMwKXKQBG2QiE6rrAe2LENU0WPbc9HmFQsJnLm4507HRZgS1UMFxcKCfzkrPSdc2QGz8nEjzZhcGVG1IyMd0qWLBrMYASNZwIzKF5reeyGfaUOxCVwolJod2ana7WM0nlaZY8O8cybfjgbKFT%2B%2F8iaa%2FhYEGk6ikKBrbsEB5w23Y3Y9%2BuGOTTem1zoJFjF4ttaUGENvZblYuG4jWD6pPWv%2Fd2D2lTa5G6ttHUquuV%2BrufusGgdoTjGb5TNFAXHRkv2NKyUNWqXfyXOubUASrOBWR3xfEPIvHCrcX%2FoH0SJX%2FzypxrzU4Zyeh1qJ2B%2F1g0XDQu6jPjCcytHJBjqkAav2D1wdsRrAAvkIiGwTNzYBKmjoHMno8RNbMtyqDO2bu1EnDKf3HWkP1ogVo1BiRSZL9BEpKvhqOVC3B7QkN0Kb9ljT8154GJSuNhsi%2FQDdpSTkh2mKcyG%2Fj7%2BW0xCch6Wfg4bGiI9HPl3mTy5RXMJZDBO0%2B5vu%2FIKVT3Ax40NRrnSC99IGJz0D%2FK3lrYqvyPMXxYyc4diras4ow6N2SVD1ydu5&X-Amz-Signature=3f61f98c6f8ff482f291bc548742c3f275f082b2172fbad9d3d81ac04a9252cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

