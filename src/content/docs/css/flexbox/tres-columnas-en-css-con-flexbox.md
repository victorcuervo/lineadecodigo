---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626OFHRBJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVI2UrFupw13JrMjKKiBuZ%2B779At6xqeG5RSUN88Jr6gIhAKuLunyn52p9uoYB3e8%2F9wVarxAGRQPEOa6uh7wPGQHeKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytikv2JmalsbwZPR0q3AMPHRcOwfvpbaWT5FakySMHDlNT%2Fqpbdh7G%2BtqoeOfjR2k7iU3pIQyqH%2FAAmjcGU8ikj6x2T%2Ftt7hNHek19qk6jnjKZ6%2BHA6LiLkw4nAlmsKszjyjzCI%2FFVlrq4CD5BpOPODFC4UmZ%2Freu9Y5Dv%2FEBfLXn4bn7%2BIL%2Fug2ZlZ0DLBJwEmUc7jFozmLbStJIY9OE6xaD9kCiW%2B0zAo%2B%2F6%2F1hSi7DE63iprDx21nkOCQ0NhckCbKT48czys%2FEV8mToP5G%2Bt7X1DLVnVNv9HEV3%2BxKGh9OtAOlmqMbtDBh6Ohai2MYcgLaw1kEs8so%2B6r309OtNHRUQ28T084Cs1jA%2F9NHFWu6Tik42fxxahpMLs8Gn%2Bu49N5nWmofmSl90RBMqdvJxyYvRPyeJQqo5QASZWrD6qfUkecpmngR5F%2FH0jL21UBGpZXFFyGwyoHYb0uKSJso69VdIRc5hznoVncNxiBX%2F%2FxQb%2BuS%2BTHIIy0FmI4Xcnrl%2BIeKJx9HzHu7Jb1Iul%2FfJx3uCg93A%2BW0S8%2FochmOaP5QRt7ClGT%2BH6lbrsDdex4kbeEznqJkqhm0pl9ti4BVcDqo%2BpmzDylt1jJIfYza8rH0JKmtiIM7r18pIWbs9lwAnAKJsjrPIx4TP7DDY89rJBjqkAfYy85qCgUyOTEW66qeZDHONcqtFil%2BNBUuajFZMHSSO%2FDfZAsL8MaURpdRPi9MIsjWLAtEcxtuX%2FWyljoAINrrvd51F4Fpt1rxtDV4KAIjTJADYTtir%2Fme5ovqV3xw09QNEWdrJ36HJvxmS27Mblge4gyq1FZa6zXfitztsdJaAA1kSiSLpknDlaVTaP8f9TZvwgyYlyRtkTjkboPC0NpZzJoFZ&X-Amz-Signature=f98f4fb1fdd588dd895c43843b80ec002036ff3c511803080928412c62771d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626OFHRBJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVI2UrFupw13JrMjKKiBuZ%2B779At6xqeG5RSUN88Jr6gIhAKuLunyn52p9uoYB3e8%2F9wVarxAGRQPEOa6uh7wPGQHeKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytikv2JmalsbwZPR0q3AMPHRcOwfvpbaWT5FakySMHDlNT%2Fqpbdh7G%2BtqoeOfjR2k7iU3pIQyqH%2FAAmjcGU8ikj6x2T%2Ftt7hNHek19qk6jnjKZ6%2BHA6LiLkw4nAlmsKszjyjzCI%2FFVlrq4CD5BpOPODFC4UmZ%2Freu9Y5Dv%2FEBfLXn4bn7%2BIL%2Fug2ZlZ0DLBJwEmUc7jFozmLbStJIY9OE6xaD9kCiW%2B0zAo%2B%2F6%2F1hSi7DE63iprDx21nkOCQ0NhckCbKT48czys%2FEV8mToP5G%2Bt7X1DLVnVNv9HEV3%2BxKGh9OtAOlmqMbtDBh6Ohai2MYcgLaw1kEs8so%2B6r309OtNHRUQ28T084Cs1jA%2F9NHFWu6Tik42fxxahpMLs8Gn%2Bu49N5nWmofmSl90RBMqdvJxyYvRPyeJQqo5QASZWrD6qfUkecpmngR5F%2FH0jL21UBGpZXFFyGwyoHYb0uKSJso69VdIRc5hznoVncNxiBX%2F%2FxQb%2BuS%2BTHIIy0FmI4Xcnrl%2BIeKJx9HzHu7Jb1Iul%2FfJx3uCg93A%2BW0S8%2FochmOaP5QRt7ClGT%2BH6lbrsDdex4kbeEznqJkqhm0pl9ti4BVcDqo%2BpmzDylt1jJIfYza8rH0JKmtiIM7r18pIWbs9lwAnAKJsjrPIx4TP7DDY89rJBjqkAfYy85qCgUyOTEW66qeZDHONcqtFil%2BNBUuajFZMHSSO%2FDfZAsL8MaURpdRPi9MIsjWLAtEcxtuX%2FWyljoAINrrvd51F4Fpt1rxtDV4KAIjTJADYTtir%2Fme5ovqV3xw09QNEWdrJ36HJvxmS27Mblge4gyq1FZa6zXfitztsdJaAA1kSiSLpknDlaVTaP8f9TZvwgyYlyRtkTjkboPC0NpZzJoFZ&X-Amz-Signature=fdbcb9c9915c850b8dcf4d33676c3488c0bab8c49d07e4f4d1a05abc7b99cba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

