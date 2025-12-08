---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSR7NENV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEHAnlkbw0WwVy9GD2mBhXUSIUD7F0gIpiXZsifCHH6AiBfE5nOLstBcUyN0foOR92QQaEAZppnrZ8%2Fo4nfDLCmyCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBuc3h5EaeGQ5OrSFKtwDMu8L1GDQsIAdMTwr82d7NDoFs2WOwMyzx89P9BsIRvANT2xy4NP5kBxi3wGIYfxFEX5MrlgApBHvmLVvs5uoJnQ%2FO0UG%2F4TAtp8P%2FyBgvy6ID%2F11NY2uUg%2BMopTZj19eOdKWiPXmjWZCXMBs8sZIV9uKqTJkRvPLVfgb0EXa7cLgKeExw01Klfkftnh836udHT3gh1ZUWb4Q7VejdrkeDapVtsR4W4up2WtZmEwBDwwoUZG1DUuFkqtAQ2fkymNW02NUp4enUd2lXQ3lH6jC1zsOasTJJIMHr3ITKeVasfA7V9KUsV1YueCWjy3BxmE4d9GCo6TciMsMJqX%2FnYb5mlj%2F3LvSmq1gpco1so2Uo006%2FZnSvtwfqbLjq2l6kR5OUsE%2FojnfoLU%2BQOBU3BD%2BkZw02jijwBx%2F0pTN8nxuNBGiiL4DbTcwxK18v0rE3%2Bk2qJgBspXpUAHOREpn5fUXwZfp33u0lZH5oUdFolXNaujt2nGYU6ZDBgxu%2BiFND1nOUfrD05qOtcdJf9a5l3GsD0L8UORGbXKFHQBGHB9UQL6Dnc2605SL1QnxNITvgF4H%2FQ3jHG8EmvLux8oYvMFJvll4%2BT5ZUfJ2EXN7Xv%2BC5gOEopDSzBqGdSGN1wkwhe7ZyQY6pgHLJwGdqgwwiPRMJG2EeQrHnFv%2BuG0adYKvp0Bn1X%2BinOH2Wmor%2F8LPTUVEF9MagbLzULnG3TwlhYJ57AncF%2Fqkq0FWfqmcUnBr5%2FQHjXpKQa4ZDczUsic9ZzlDOaRDLDx8CTelhDSvaARWY6%2BSy5nbNhEd3%2BC7Gb03%2B18e%2BgaIcYoxlEPl4aTq4UwaAedtvHQ4X2S6PC%2FiyBqM9Rko9qPbml4MwhCz&X-Amz-Signature=e73b194b047806880b865f7ed0ac3f209cc0a887e519f2329ddbfb26f66da839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSR7NENV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEHAnlkbw0WwVy9GD2mBhXUSIUD7F0gIpiXZsifCHH6AiBfE5nOLstBcUyN0foOR92QQaEAZppnrZ8%2Fo4nfDLCmyCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBuc3h5EaeGQ5OrSFKtwDMu8L1GDQsIAdMTwr82d7NDoFs2WOwMyzx89P9BsIRvANT2xy4NP5kBxi3wGIYfxFEX5MrlgApBHvmLVvs5uoJnQ%2FO0UG%2F4TAtp8P%2FyBgvy6ID%2F11NY2uUg%2BMopTZj19eOdKWiPXmjWZCXMBs8sZIV9uKqTJkRvPLVfgb0EXa7cLgKeExw01Klfkftnh836udHT3gh1ZUWb4Q7VejdrkeDapVtsR4W4up2WtZmEwBDwwoUZG1DUuFkqtAQ2fkymNW02NUp4enUd2lXQ3lH6jC1zsOasTJJIMHr3ITKeVasfA7V9KUsV1YueCWjy3BxmE4d9GCo6TciMsMJqX%2FnYb5mlj%2F3LvSmq1gpco1so2Uo006%2FZnSvtwfqbLjq2l6kR5OUsE%2FojnfoLU%2BQOBU3BD%2BkZw02jijwBx%2F0pTN8nxuNBGiiL4DbTcwxK18v0rE3%2Bk2qJgBspXpUAHOREpn5fUXwZfp33u0lZH5oUdFolXNaujt2nGYU6ZDBgxu%2BiFND1nOUfrD05qOtcdJf9a5l3GsD0L8UORGbXKFHQBGHB9UQL6Dnc2605SL1QnxNITvgF4H%2FQ3jHG8EmvLux8oYvMFJvll4%2BT5ZUfJ2EXN7Xv%2BC5gOEopDSzBqGdSGN1wkwhe7ZyQY6pgHLJwGdqgwwiPRMJG2EeQrHnFv%2BuG0adYKvp0Bn1X%2BinOH2Wmor%2F8LPTUVEF9MagbLzULnG3TwlhYJ57AncF%2Fqkq0FWfqmcUnBr5%2FQHjXpKQa4ZDczUsic9ZzlDOaRDLDx8CTelhDSvaARWY6%2BSy5nbNhEd3%2BC7Gb03%2B18e%2BgaIcYoxlEPl4aTq4UwaAedtvHQ4X2S6PC%2FiyBqM9Rko9qPbml4MwhCz&X-Amz-Signature=c7a94e0ebb0299271312cc0f57b8cfd86dc25d097bf71ab574d99e9b7aec0ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

