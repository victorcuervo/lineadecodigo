---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDDSL6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfkHxRBohEKyANeFB4POWBBVEYteRv1FT%2Fki%2BP8hBbrAiEAhSH8y5IFWDR%2Fht%2FQouj%2BFKyX7F8aDEoV4W%2BiP5MKaYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyYZ4xR0IC%2BT9OK4ircA9mXeeypelGc4sk1NB3DAdOOlGIMDlK7RZK3bQWQzzJ3764rMbDoxszu316ceuosLMkLlkAq30N54qUlTwpnl4PX6OXJWt00mQRUusyJMU%2FureDQNLDF1fg4vpTfRH0m%2F8oyORqUr4aAQjWtyBdXBdrvDWum7XtTDzWlj4HePZc%2FNtYSkPoqXar4sv4JPho4LndUSC4NClVfWnbeX85Yt13MN4fEXBkk4Eqcdk2yROEli0qtYAN8F55o6GBs2XWWzTJu4420CnvBubNeJ6CyJZyYIZ3uFYrLZyQTd83CyeFp9HpXCKji4uzRylue%2FG1GWb88hkw8%2FInLA4xA0Pou4sKxGw%2B%2B5Eg5zNhhsVjuxEydvQ3BhVEkZxpvtR%2FgybWfZEYMxNo5wVFwoJN5gP1qEVDKOl%2B9zVE020Pt%2BwodjqD1VKFxdyZWKziBEDW1e9r4NUCmZU7eaDL4KtXLeMDYLwGIRO3pMOEklMxVczJ5TilblSUKKafvgqogOdi4%2BlPMmqHsf3110bYjmmXtUDsT0OS3lH2%2Baeiy%2B37Ni%2B%2BsSmzcXe111Avc7zgr%2BNhaCe16UeomhZSgr9%2B5Mu48yxZjwiIeFDTw4%2FkiSBxFav7tBNTEyeNyjX8IzC4WPCpwMKrC3ckGOqUB353x9HIunyMtB8KNcqcgYl%2BOMo7NZnOthYAKbjHjtCDT4GOI3ciLtTjtSkCyv27q0CWsW83CBJAo2nRn88a0P7NPKeKTYvaQGEDhFumaiJgDpyBoxAUyUdfZcJuZxy%2FIyYWbv08cHHhG92gIgmHkT4xNCCNC%2BpQm5mmVMf4BYXFDBuWGvL%2BDBOBLzfyTWzDMJlO9QHQqL0hajq%2B1Lqb1i9WvV2TJ&X-Amz-Signature=c188fbd63b1fb75f3b1ab6c74b938715fd188db793ea4b6144b69e12bff980a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDDSL6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfkHxRBohEKyANeFB4POWBBVEYteRv1FT%2Fki%2BP8hBbrAiEAhSH8y5IFWDR%2Fht%2FQouj%2BFKyX7F8aDEoV4W%2BiP5MKaYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyYZ4xR0IC%2BT9OK4ircA9mXeeypelGc4sk1NB3DAdOOlGIMDlK7RZK3bQWQzzJ3764rMbDoxszu316ceuosLMkLlkAq30N54qUlTwpnl4PX6OXJWt00mQRUusyJMU%2FureDQNLDF1fg4vpTfRH0m%2F8oyORqUr4aAQjWtyBdXBdrvDWum7XtTDzWlj4HePZc%2FNtYSkPoqXar4sv4JPho4LndUSC4NClVfWnbeX85Yt13MN4fEXBkk4Eqcdk2yROEli0qtYAN8F55o6GBs2XWWzTJu4420CnvBubNeJ6CyJZyYIZ3uFYrLZyQTd83CyeFp9HpXCKji4uzRylue%2FG1GWb88hkw8%2FInLA4xA0Pou4sKxGw%2B%2B5Eg5zNhhsVjuxEydvQ3BhVEkZxpvtR%2FgybWfZEYMxNo5wVFwoJN5gP1qEVDKOl%2B9zVE020Pt%2BwodjqD1VKFxdyZWKziBEDW1e9r4NUCmZU7eaDL4KtXLeMDYLwGIRO3pMOEklMxVczJ5TilblSUKKafvgqogOdi4%2BlPMmqHsf3110bYjmmXtUDsT0OS3lH2%2Baeiy%2B37Ni%2B%2BsSmzcXe111Avc7zgr%2BNhaCe16UeomhZSgr9%2B5Mu48yxZjwiIeFDTw4%2FkiSBxFav7tBNTEyeNyjX8IzC4WPCpwMKrC3ckGOqUB353x9HIunyMtB8KNcqcgYl%2BOMo7NZnOthYAKbjHjtCDT4GOI3ciLtTjtSkCyv27q0CWsW83CBJAo2nRn88a0P7NPKeKTYvaQGEDhFumaiJgDpyBoxAUyUdfZcJuZxy%2FIyYWbv08cHHhG92gIgmHkT4xNCCNC%2BpQm5mmVMf4BYXFDBuWGvL%2BDBOBLzfyTWzDMJlO9QHQqL0hajq%2B1Lqb1i9WvV2TJ&X-Amz-Signature=7498673382a61e150637a8ca94224d92d72b30afc46f5e6db8f088d3119d095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

