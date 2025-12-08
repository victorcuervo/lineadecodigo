---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCS4YRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5aw1eCXeHlPlw5FYNoiFEa0GRDlGwwoiatc5CWTDDLAiEAtaNPVeUybcuL8JjtDDyAWG5rAbn3dcytu5kMrfnh4V0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ViwXR%2BecaelkfpyrcA21Qv8AzHwDFLPjbQach0MfVGUQzstMxE5FCDTUM8k8qEZ4jigwCYJ2GkQqWkLVfidOy8KC8crly0oBfEJ6dF6MQ%2F4PHjhVezLGIvAi1Gy6uXwVCgon9U3gT%2BYnzregTsB%2FkO9XCmJtPAZEIH1IZTyEcO38Qr9fqLsiA4430HdU0uqjaQoXg3t%2Fpqw0OouAVYB3RADf48KFtQPbnGuLL5%2BeMsAb0gS9jViACA4Yqe5Iy55JlF7xavqD6vbHhzWraiZrjaWItXF7kTUOVEpYlW47TVnULhcCxq4OvK8NOssMCcloIMjeHvxxb0%2BFsEUv8uVwgu0giJII9I%2FR4UM85sZdo5%2FLgmy3CK3Zb3OQUYApKCqqVHb1Ki1WAHDrnGrdsc38fSTW4mShxylEMpZwAKtuO%2BnKs0jEYTa5o%2FdAnMIyNxuTVbjy1mzA9wkb%2B6zR2ma26XrcA6ssUY9ncsHUDSf7u1GLwwIkaStKPuTAX%2Fbg9hb%2Floy2UhqTIcoorRk%2B9yA3%2B7RUNcc0mDLQV%2BG4Vc41047PZ5VE%2FMhYXdHwV1Pj7cGc6f5cv1FHPbPmISIZ3JFG5sXkSzpS%2BWP2O1USlc9563xFpsfu18WAWfKb8oXZP2QdymuUmT6s9NMYeMP7s2ckGOqUBV6Wp5mqOGNoJ4muj4Ywqw6s6CgWB0v4HVYDUgLMrAu539%2F4mjLXm1K7jFldnwILvlXYBLFWg4ZkUsGX0nMJIK%2FBTn3yemuIplvE0ZoyFUH7VKHCJMNbRQg2ypX9ll%2FfZpd58Qv%2FfX13l1EUk4QVdcGLecYJUlyvqS8VICktwUtzPGtIl3gB9nW%2FV%2FU6nbsH%2F8qWhRqOEdYwN3e4jbasxEz7lqqlk&X-Amz-Signature=7a81037af6e3d70d059f8c120d114289cf28ba9ec4304cdc48a2c1604553283c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCS4YRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5aw1eCXeHlPlw5FYNoiFEa0GRDlGwwoiatc5CWTDDLAiEAtaNPVeUybcuL8JjtDDyAWG5rAbn3dcytu5kMrfnh4V0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ViwXR%2BecaelkfpyrcA21Qv8AzHwDFLPjbQach0MfVGUQzstMxE5FCDTUM8k8qEZ4jigwCYJ2GkQqWkLVfidOy8KC8crly0oBfEJ6dF6MQ%2F4PHjhVezLGIvAi1Gy6uXwVCgon9U3gT%2BYnzregTsB%2FkO9XCmJtPAZEIH1IZTyEcO38Qr9fqLsiA4430HdU0uqjaQoXg3t%2Fpqw0OouAVYB3RADf48KFtQPbnGuLL5%2BeMsAb0gS9jViACA4Yqe5Iy55JlF7xavqD6vbHhzWraiZrjaWItXF7kTUOVEpYlW47TVnULhcCxq4OvK8NOssMCcloIMjeHvxxb0%2BFsEUv8uVwgu0giJII9I%2FR4UM85sZdo5%2FLgmy3CK3Zb3OQUYApKCqqVHb1Ki1WAHDrnGrdsc38fSTW4mShxylEMpZwAKtuO%2BnKs0jEYTa5o%2FdAnMIyNxuTVbjy1mzA9wkb%2B6zR2ma26XrcA6ssUY9ncsHUDSf7u1GLwwIkaStKPuTAX%2Fbg9hb%2Floy2UhqTIcoorRk%2B9yA3%2B7RUNcc0mDLQV%2BG4Vc41047PZ5VE%2FMhYXdHwV1Pj7cGc6f5cv1FHPbPmISIZ3JFG5sXkSzpS%2BWP2O1USlc9563xFpsfu18WAWfKb8oXZP2QdymuUmT6s9NMYeMP7s2ckGOqUBV6Wp5mqOGNoJ4muj4Ywqw6s6CgWB0v4HVYDUgLMrAu539%2F4mjLXm1K7jFldnwILvlXYBLFWg4ZkUsGX0nMJIK%2FBTn3yemuIplvE0ZoyFUH7VKHCJMNbRQg2ypX9ll%2FfZpd58Qv%2FfX13l1EUk4QVdcGLecYJUlyvqS8VICktwUtzPGtIl3gB9nW%2FV%2FU6nbsH%2F8qWhRqOEdYwN3e4jbasxEz7lqqlk&X-Amz-Signature=61d5d583581e6eaa85e80b6c88c1806f226b92918a7f2162c4a6b6d9a1064b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

