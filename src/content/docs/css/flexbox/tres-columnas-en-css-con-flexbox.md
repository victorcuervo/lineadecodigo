---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNA7GJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGleWOOaQtI%2FRK%2BpHLijbZNdulgTEj%2FoTW%2FF53WUbyNIAiEAwtbQ%2BDeukhztq0grSFCWikuN4pNcigHwUsHd0ypW0KsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4gt4%2F6UFi%2BFrqU7yrcA43URDU3SWCF3BOYJPkasYx26jQS2ePV3HHzMztS1AsG4IcpwhTfH84oB6c46Pn7MQPe%2B1UF97HSfOWdJEU0OgUk1MSxllp6E9HZUw2kqWKOczvfGehIZ1GrqbSo0FRZTkt1PcktO3EJhYSsj%2FpjMSLpMID3JEg%2BsUgHqzALGwf6iXqmcT9hc1KsMsx%2BdA7oXt8rdUwfAMYUb913F1nWh6BhtCabE1uT4rtekhhiEh%2FHR9dH%2F5bkGketcLZI7EzF%2Bu2aCQ35Wa5ZirYx9VwMqKN6tNL7mnrgZVm7rchxnDleD4KAdtEexIfiOjJv05rN1bJc1Xx8xwR0sapABGk3FDBMiUMpndHCEKCJSdNc8js2YNKKXw1JiiIstfVwqr6T2Y1QUbOJ0H7owO9D2kGIOjoM7RSDQTF1uIwHFQ2QVkg9E%2B%2Fl7O%2FAhkCQeQoC6EkMI%2FNjtDbgWDvbgqlaJvDW0n2V%2F6jDGQjWbZJlHYfPw%2FSwb6rHmjx1csAU0t4fiDi89OQ1Bl5GKFkO36eb17RY5%2FXAFBgO%2FLXMvdwgphjTXMjOUHQsMC6knZCJ64dWh0a6701y20N16L30qSNZ4ndoPzPwFPPnZem9wqcdB4WlrFIDr9jgrStE9%2B%2FlOuG3MNvC3ckGOqUBvYPdsX6WjNRelxUf5Mag%2FSQDXfy%2F2yyncGjJsKmDsRFoJ8%2FtGUmzXend1N5191K2xCDKhmLW5hPfHD3gXNftfhayfNbbjituOfl2o6uGQ0swTM9eGUqybfsyIngntSSmggFW6pYCDlwnCENd0gvhwGNwSiCl%2FJYmFMAwDd3gxXSCfP7HVg5IOG4U1SEr%2BSGdA7MF%2Fnuh7RUZq4DgBoeiDlWsESTr&X-Amz-Signature=f931148e305234d56680dbe1c2b448305d9aaea2f1ae9958882d1a348bf3c50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNA7GJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGleWOOaQtI%2FRK%2BpHLijbZNdulgTEj%2FoTW%2FF53WUbyNIAiEAwtbQ%2BDeukhztq0grSFCWikuN4pNcigHwUsHd0ypW0KsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4gt4%2F6UFi%2BFrqU7yrcA43URDU3SWCF3BOYJPkasYx26jQS2ePV3HHzMztS1AsG4IcpwhTfH84oB6c46Pn7MQPe%2B1UF97HSfOWdJEU0OgUk1MSxllp6E9HZUw2kqWKOczvfGehIZ1GrqbSo0FRZTkt1PcktO3EJhYSsj%2FpjMSLpMID3JEg%2BsUgHqzALGwf6iXqmcT9hc1KsMsx%2BdA7oXt8rdUwfAMYUb913F1nWh6BhtCabE1uT4rtekhhiEh%2FHR9dH%2F5bkGketcLZI7EzF%2Bu2aCQ35Wa5ZirYx9VwMqKN6tNL7mnrgZVm7rchxnDleD4KAdtEexIfiOjJv05rN1bJc1Xx8xwR0sapABGk3FDBMiUMpndHCEKCJSdNc8js2YNKKXw1JiiIstfVwqr6T2Y1QUbOJ0H7owO9D2kGIOjoM7RSDQTF1uIwHFQ2QVkg9E%2B%2Fl7O%2FAhkCQeQoC6EkMI%2FNjtDbgWDvbgqlaJvDW0n2V%2F6jDGQjWbZJlHYfPw%2FSwb6rHmjx1csAU0t4fiDi89OQ1Bl5GKFkO36eb17RY5%2FXAFBgO%2FLXMvdwgphjTXMjOUHQsMC6knZCJ64dWh0a6701y20N16L30qSNZ4ndoPzPwFPPnZem9wqcdB4WlrFIDr9jgrStE9%2B%2FlOuG3MNvC3ckGOqUBvYPdsX6WjNRelxUf5Mag%2FSQDXfy%2F2yyncGjJsKmDsRFoJ8%2FtGUmzXend1N5191K2xCDKhmLW5hPfHD3gXNftfhayfNbbjituOfl2o6uGQ0swTM9eGUqybfsyIngntSSmggFW6pYCDlwnCENd0gvhwGNwSiCl%2FJYmFMAwDd3gxXSCfP7HVg5IOG4U1SEr%2BSGdA7MF%2Fnuh7RUZq4DgBoeiDlWsESTr&X-Amz-Signature=d94c144a253be2e530c1290f6f1c4dbe93036b7da7977b61132b75062d49ad85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

