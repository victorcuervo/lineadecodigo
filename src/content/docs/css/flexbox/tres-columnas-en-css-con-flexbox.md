---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDISIMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHfjLu8cLAa1SD7DvjmegEzZykhREcfzlOo3KcYcrl6QIgbc3myiOBVFxeM%2BoHBAkV1sLo1%2FMUvcDXf4KVezeqVw4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb9BhxsK1asCHUklircA4Q6DUTxWZdrFKboBhwdaHGvd98TLip6P0JNiFAae1yVO8z0hx59oMQiL3mfYysf3EAwGW31othGMa8m5ruwekqCNXRCtS1Lon7xw3KFv%2BREolmuVwSyWurOjzvD8Z5UesS2EgG%2Fo9QYUhnS%2FXF9hN5D6oPdBcbg9uHZo1f2QRqZPNfwwUAeg9BlSvUFDLN2HQsF2GE7fNhUw8sYA22PUMUc%2FZuHRawO80hKt9MdexlXiOmJY2TEQV3negvGuPSCNMoGdgs6L%2F581HCkhZTXde78Qiv1FW1GWIr1qxmzFzbqwzJJKD9dz6Hn6Fbs7198NmsOwoyAoYnyhF%2FhvOPqZqqXnS4p8uOEE82LhvOoj29sQ4XYyr0BP7YpzGku0RjbQHQmsY3HRMBoCTyLPmC4g40xB7M8qU26DO0%2Fh4CgULG%2F%2BcHwCDkS4vlf7xcVYG4KOQwMa3%2Br40XmzzacXBMGt%2B0GV331X58MwEw7JDqTesqpkMONDETIwX%2BMtFJ0MuDMeS5Z5alRG5nhoJUMJALZV9%2FbwGQWufuAItIUU0O%2BO%2FIsH9Cj0DZWPdLYGwKVzYTQiavAGAaUblMnPn4Z0g2NF3Ggom%2FJlhfEOSv74xlbh%2BUS2U7MCGpD%2F8rEJde0MLK91skGOqUBmA0vBNttdJXZwNhnL%2F3pL28VT2%2FvJRdd6wEhjlMRHV%2FZd2OEC6avIrJ%2FVlVyPZFDNBC8VKqr3SAK%2B8uXz4hLuK7isnCaWG3sb13AXaKVf7WBSAY0Jj3rfSLzrYSd3LEvZr%2FzxBS%2FFsOuMQEyiR9HqEgqa2Gugt0kLnI6OV4aWnQ7QqEWk6wb%2BsLepL2JpRGPvsiWPWRbK4qZSknZ%2Fvdz9zth5REK&X-Amz-Signature=dac085cc95044d5ba69a8683bb30ad7ccbba6767f623fee9d44feb25b2b864ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDISIMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHfjLu8cLAa1SD7DvjmegEzZykhREcfzlOo3KcYcrl6QIgbc3myiOBVFxeM%2BoHBAkV1sLo1%2FMUvcDXf4KVezeqVw4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb9BhxsK1asCHUklircA4Q6DUTxWZdrFKboBhwdaHGvd98TLip6P0JNiFAae1yVO8z0hx59oMQiL3mfYysf3EAwGW31othGMa8m5ruwekqCNXRCtS1Lon7xw3KFv%2BREolmuVwSyWurOjzvD8Z5UesS2EgG%2Fo9QYUhnS%2FXF9hN5D6oPdBcbg9uHZo1f2QRqZPNfwwUAeg9BlSvUFDLN2HQsF2GE7fNhUw8sYA22PUMUc%2FZuHRawO80hKt9MdexlXiOmJY2TEQV3negvGuPSCNMoGdgs6L%2F581HCkhZTXde78Qiv1FW1GWIr1qxmzFzbqwzJJKD9dz6Hn6Fbs7198NmsOwoyAoYnyhF%2FhvOPqZqqXnS4p8uOEE82LhvOoj29sQ4XYyr0BP7YpzGku0RjbQHQmsY3HRMBoCTyLPmC4g40xB7M8qU26DO0%2Fh4CgULG%2F%2BcHwCDkS4vlf7xcVYG4KOQwMa3%2Br40XmzzacXBMGt%2B0GV331X58MwEw7JDqTesqpkMONDETIwX%2BMtFJ0MuDMeS5Z5alRG5nhoJUMJALZV9%2FbwGQWufuAItIUU0O%2BO%2FIsH9Cj0DZWPdLYGwKVzYTQiavAGAaUblMnPn4Z0g2NF3Ggom%2FJlhfEOSv74xlbh%2BUS2U7MCGpD%2F8rEJde0MLK91skGOqUBmA0vBNttdJXZwNhnL%2F3pL28VT2%2FvJRdd6wEhjlMRHV%2FZd2OEC6avIrJ%2FVlVyPZFDNBC8VKqr3SAK%2B8uXz4hLuK7isnCaWG3sb13AXaKVf7WBSAY0Jj3rfSLzrYSd3LEvZr%2FzxBS%2FFsOuMQEyiR9HqEgqa2Gugt0kLnI6OV4aWnQ7QqEWk6wb%2BsLepL2JpRGPvsiWPWRbK4qZSknZ%2Fvdz9zth5REK&X-Amz-Signature=2bec9525a31b46df26178add5283deab40b6cab8030978e5d917155c281411ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

