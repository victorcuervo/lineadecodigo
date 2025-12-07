---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FT2FGRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzDna2E1V3x%2BsTUGUav2FU5j6BRGbSV7HkSZKf40KjPwIhAN55kRPwluMFNYWBjVdN1oYMsz6M8YiNEL6iKkS%2Fy%2BnnKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGwqVO9LkgcXpgyBQq3AOHJSSrgqV9kgLvCrlPhxW83a1%2FcogyBEZD6WC%2BmNxHf2t13DbLF9rc%2Fsc7FWHZJebDmEAjM%2BGQ46ySthKV15QUBkrC%2FfVjyYTa7GZvHwtuLNzKFbA9KLhvoX5j7C9G6olvYHByVwXnXQaAopOaorMmYHXINtdYMSqJFJz5vYfSHLD2bsvcx%2Fcafr8kcM97YBeWvxcB%2FfWBBNKjoLZdl9fTH0pyK%2F94MaN7FWvBjjf3buKIUJVM%2B9KZBAAdOF1p7reZShtZwkv7MM5V8x6WRgZt9QPxiJIEJBDP70Slynb53tIvf%2FEg2SzIt52ezcyaHTmZHBFGiBnmmCdFXpQBUsvqNP68xORbcYi2Gs8T66h6fbMclrWt%2BidfqGTwTvZoDKXihKCslC2AHpoWqn9S%2B3wN5GsJD0yO3tQ8I2o5s9dzeOVmA8tlWKyBWxKnxuJM5maWOjVvaNbG215%2FTg8B1is6e0kl1Hx1dpLfJrWAm8m5thpK0HRhQDy1bGT2IY4Oj%2FB0uVN%2FfXzy%2BlDKc2nsAZSSfaywtHXCBu8jovj7zldiVfu0WHnqPpO9BrBwZnQHCZfdpGVNXgFaPm%2FVfwkk6RQhv6FIH8jMg%2BlWkG9mff5QzO3egkwrSHSpl7gH%2FDCrn9TJBjqkAZFhFhv0%2Fgu32Ji8EF6THEP6n%2BHo5aYIBO1gtmN7grHIwYT12Oi070YF3f6X64zfKjIPmPbdeLHogC8Q72RIjwG1l8TxHSXQKvxXuytDx6I9sO3h7Gi%2FxQ1ESayrPHUnouIdRzdhbvJ2yUnUQR6Y2z7FcmrIu%2F9hjeK6leUkP%2FmCfNWx%2Fqh529DEABJtOwY%2BbC5xhrMbKJYE2vOKMuhHgkv%2FyPBT&X-Amz-Signature=b9aa78e6a300fe4302c826ea144a4f5f83edb8c0b1feea850c944d8921ef1ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FT2FGRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzDna2E1V3x%2BsTUGUav2FU5j6BRGbSV7HkSZKf40KjPwIhAN55kRPwluMFNYWBjVdN1oYMsz6M8YiNEL6iKkS%2Fy%2BnnKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGwqVO9LkgcXpgyBQq3AOHJSSrgqV9kgLvCrlPhxW83a1%2FcogyBEZD6WC%2BmNxHf2t13DbLF9rc%2Fsc7FWHZJebDmEAjM%2BGQ46ySthKV15QUBkrC%2FfVjyYTa7GZvHwtuLNzKFbA9KLhvoX5j7C9G6olvYHByVwXnXQaAopOaorMmYHXINtdYMSqJFJz5vYfSHLD2bsvcx%2Fcafr8kcM97YBeWvxcB%2FfWBBNKjoLZdl9fTH0pyK%2F94MaN7FWvBjjf3buKIUJVM%2B9KZBAAdOF1p7reZShtZwkv7MM5V8x6WRgZt9QPxiJIEJBDP70Slynb53tIvf%2FEg2SzIt52ezcyaHTmZHBFGiBnmmCdFXpQBUsvqNP68xORbcYi2Gs8T66h6fbMclrWt%2BidfqGTwTvZoDKXihKCslC2AHpoWqn9S%2B3wN5GsJD0yO3tQ8I2o5s9dzeOVmA8tlWKyBWxKnxuJM5maWOjVvaNbG215%2FTg8B1is6e0kl1Hx1dpLfJrWAm8m5thpK0HRhQDy1bGT2IY4Oj%2FB0uVN%2FfXzy%2BlDKc2nsAZSSfaywtHXCBu8jovj7zldiVfu0WHnqPpO9BrBwZnQHCZfdpGVNXgFaPm%2FVfwkk6RQhv6FIH8jMg%2BlWkG9mff5QzO3egkwrSHSpl7gH%2FDCrn9TJBjqkAZFhFhv0%2Fgu32Ji8EF6THEP6n%2BHo5aYIBO1gtmN7grHIwYT12Oi070YF3f6X64zfKjIPmPbdeLHogC8Q72RIjwG1l8TxHSXQKvxXuytDx6I9sO3h7Gi%2FxQ1ESayrPHUnouIdRzdhbvJ2yUnUQR6Y2z7FcmrIu%2F9hjeK6leUkP%2FmCfNWx%2Fqh529DEABJtOwY%2BbC5xhrMbKJYE2vOKMuhHgkv%2FyPBT&X-Amz-Signature=460e56b956a61bfcdbfe7074395340628db344661de98080e5d4e452e4f0ae00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

