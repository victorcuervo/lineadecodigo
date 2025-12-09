---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPVIQO6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr%2BRopuG19AvDxrpcsYadxODFZ6%2FB8lnKyw%2BMop1kIYAiB5JBrSQY7kbcVrLU4alrcMTpvtgEkgeQ%2BDTsS5umyEMiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJ13tNTv4nrhXKSqKtwDJb8t3OQuQwgqVzyAvdb94yflleWgTUwZf%2F6rg7qV56ucEyJVuQVR9kZe4ROGW%2B4gnGIDGaEdqkukDUvaa0tOPw3Y%2B6JlNC6NtujirwMM7nrhdJTMZ1W0g%2BJZ5cPA1s59mDW8zAE4kYJgHDMzQf1uFF7545zP%2B3NzrzDMbExZr8Mdo0x%2FZBsgR9ecPfa7Fm7%2BE92UPHDdvuO416zeHZQgj0V4brZkX%2BFfhzSu1ph9nxLyAOQSr4zPFNlWFteu9vFsXeTiQKKKNZXSXE6vXtUYoJOJATBgfeQbo3ugjZG194Iedqa2vb1B6XtKU7WCJLpA4P1PY%2BM0NonzdkpeFlZH%2BiTTsdwGml3ZbTHogupHOXeaqbP6wDxyILQtfFKZei6R8v97LUmbvJSAdm2jbF6s9IpDT%2BqW%2B6GjmC7H1889QUl2xtcLC7r68F9gnhUlqrfF%2BjYp2glmiZhruaN7ykZtoVTn5s0N8VOsF61H9LT%2B0pND2d91pgKed0L%2BUy2gjZWh5Bbzmm4Qe%2FyOZhoCuSUCF9nv67yew%2BZhgNSOplbWO7YdWB6mZXfZkvUkAvM43OR%2B5QptzpJIZuY3xAJ5Hv81icRLvflddNqI9e6HIKZ%2FMvvqnhg3fyfPDKOV8wow%2FoffyQY6pgE7U20rFeN1LCiIkO3nrICeaEQ9D6dn31aSJLIcTmgX54tecILK6tR6z%2FLOOVw%2FsI5egm%2BpDTd9z8uKq92kWEp%2F0WPHK8Deh11rhkOQz5tlu91RE8j5WVTuyqlVCwPmuUh5LdBcYEi01Kexn%2BFUlvS1%2BlIQibyf53XBrYe3LVgfkNK6KZDPsgUQRZIHIU05yx34VJb5uO3sZKWAlModTpF4TplDhNqH&X-Amz-Signature=19430249e42c6cba4895b291f6202052b7bc13f8894c7c6bf7c526d704d7d263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPVIQO6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr%2BRopuG19AvDxrpcsYadxODFZ6%2FB8lnKyw%2BMop1kIYAiB5JBrSQY7kbcVrLU4alrcMTpvtgEkgeQ%2BDTsS5umyEMiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJ13tNTv4nrhXKSqKtwDJb8t3OQuQwgqVzyAvdb94yflleWgTUwZf%2F6rg7qV56ucEyJVuQVR9kZe4ROGW%2B4gnGIDGaEdqkukDUvaa0tOPw3Y%2B6JlNC6NtujirwMM7nrhdJTMZ1W0g%2BJZ5cPA1s59mDW8zAE4kYJgHDMzQf1uFF7545zP%2B3NzrzDMbExZr8Mdo0x%2FZBsgR9ecPfa7Fm7%2BE92UPHDdvuO416zeHZQgj0V4brZkX%2BFfhzSu1ph9nxLyAOQSr4zPFNlWFteu9vFsXeTiQKKKNZXSXE6vXtUYoJOJATBgfeQbo3ugjZG194Iedqa2vb1B6XtKU7WCJLpA4P1PY%2BM0NonzdkpeFlZH%2BiTTsdwGml3ZbTHogupHOXeaqbP6wDxyILQtfFKZei6R8v97LUmbvJSAdm2jbF6s9IpDT%2BqW%2B6GjmC7H1889QUl2xtcLC7r68F9gnhUlqrfF%2BjYp2glmiZhruaN7ykZtoVTn5s0N8VOsF61H9LT%2B0pND2d91pgKed0L%2BUy2gjZWh5Bbzmm4Qe%2FyOZhoCuSUCF9nv67yew%2BZhgNSOplbWO7YdWB6mZXfZkvUkAvM43OR%2B5QptzpJIZuY3xAJ5Hv81icRLvflddNqI9e6HIKZ%2FMvvqnhg3fyfPDKOV8wow%2FoffyQY6pgE7U20rFeN1LCiIkO3nrICeaEQ9D6dn31aSJLIcTmgX54tecILK6tR6z%2FLOOVw%2FsI5egm%2BpDTd9z8uKq92kWEp%2F0WPHK8Deh11rhkOQz5tlu91RE8j5WVTuyqlVCwPmuUh5LdBcYEi01Kexn%2BFUlvS1%2BlIQibyf53XBrYe3LVgfkNK6KZDPsgUQRZIHIU05yx34VJb5uO3sZKWAlModTpF4TplDhNqH&X-Amz-Signature=8aa7ceb2d89c3f734d92333530c4b106659bd3e97ba1bf20b4590f1eb47d8760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

