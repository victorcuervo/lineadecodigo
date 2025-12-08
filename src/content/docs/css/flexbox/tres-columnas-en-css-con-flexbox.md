---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J7ANRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjh5s7P3XXb5fLeMNNMQLAvyOW%2FRo1%2FVIuNWjGMfBkQIgJ4DTEVTJCE3iUqADWhYGYbg%2BtgRqaG6PJi39yT%2FljigqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILz4HSO3eRSd5p3%2FyrcA%2F7RZlVrI19TLOqTLTzCwHa7QCAq2stInvxpcLSMWszPv25V43aAroFeUH7Wng4H2ekuN1ySICHGUbY0EScPcA5UDUD%2FlWcoZD6TZ4j%2FW%2Fky9r7Dih6EZcjSjAeArynLe1EzMsGNuIRZNF93AnDBodq6moVHvWgBrce1aWeBqJrrY7ar%2BRB3hGQVarghb12KmadDeX%2BklUNc3wwAfiHNjIWs14ihJlAFwKsdgSuHJ0Zl8O4oMGeqkH71Z1GkCExxjySTIG4EubiXEqDSQV6zBe%2FEwGhlxt%2BkolljF4RNdwx1GZW1F5jejOpHqqVCcESCkaBPGjgyy30NVzNHLxWWmI4HG0kxxRmg5Fh4XsMjTKJ%2F5LRI9zH0Rbyp37q4%2BH7tMbNSuKLeZKpN3BNUPgS3xwohSWLdEJ5pZBWobxYOtUntLA7QFXogrz%2BzuQ%2FEeBFwju6qL7alWOwne0OVkX9WtkXfaMAr0uuuMilJ5NBqWeV8Wc5pMFbsdhCxPVMAbXMfIoScIZIfGr5lbYDnJeTuhCmiPNY40dTJp5pci%2FAuIn2kRLjeIF3BVsYwr9k1uezQzn2SDt38V%2F4vUD9rgQ0kr0KseEIc1dHrmbgFVrodGwp86lJPb0POoaRqNp6jMLfk28kGOqUBv%2Bd5S8okjq94HXmPyDRXHDpzt%2BuVYgFbLsSDT6BWet3YKLYZlX96BMegXdCoP76J43l%2BcLVlEktJSX8Iho1YiX3Rnj7UHTeIA7KL2apzjZQk5Ybt0hleg%2BYokEXXxZduj1br4JibaBkGZRznbYibzxav6dZ4PMLIpzedaezm96ij1ZffLGeeHA3QOl%2FyRZOqskzkHzKvdq6%2FwebvoYlHZlQgCOKp&X-Amz-Signature=7bb77f7a16d6a61ba4782520591dc8bb69320163a48dff2af9e6b5655b28e7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634J7ANRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjh5s7P3XXb5fLeMNNMQLAvyOW%2FRo1%2FVIuNWjGMfBkQIgJ4DTEVTJCE3iUqADWhYGYbg%2BtgRqaG6PJi39yT%2FljigqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILz4HSO3eRSd5p3%2FyrcA%2F7RZlVrI19TLOqTLTzCwHa7QCAq2stInvxpcLSMWszPv25V43aAroFeUH7Wng4H2ekuN1ySICHGUbY0EScPcA5UDUD%2FlWcoZD6TZ4j%2FW%2Fky9r7Dih6EZcjSjAeArynLe1EzMsGNuIRZNF93AnDBodq6moVHvWgBrce1aWeBqJrrY7ar%2BRB3hGQVarghb12KmadDeX%2BklUNc3wwAfiHNjIWs14ihJlAFwKsdgSuHJ0Zl8O4oMGeqkH71Z1GkCExxjySTIG4EubiXEqDSQV6zBe%2FEwGhlxt%2BkolljF4RNdwx1GZW1F5jejOpHqqVCcESCkaBPGjgyy30NVzNHLxWWmI4HG0kxxRmg5Fh4XsMjTKJ%2F5LRI9zH0Rbyp37q4%2BH7tMbNSuKLeZKpN3BNUPgS3xwohSWLdEJ5pZBWobxYOtUntLA7QFXogrz%2BzuQ%2FEeBFwju6qL7alWOwne0OVkX9WtkXfaMAr0uuuMilJ5NBqWeV8Wc5pMFbsdhCxPVMAbXMfIoScIZIfGr5lbYDnJeTuhCmiPNY40dTJp5pci%2FAuIn2kRLjeIF3BVsYwr9k1uezQzn2SDt38V%2F4vUD9rgQ0kr0KseEIc1dHrmbgFVrodGwp86lJPb0POoaRqNp6jMLfk28kGOqUBv%2Bd5S8okjq94HXmPyDRXHDpzt%2BuVYgFbLsSDT6BWet3YKLYZlX96BMegXdCoP76J43l%2BcLVlEktJSX8Iho1YiX3Rnj7UHTeIA7KL2apzjZQk5Ybt0hleg%2BYokEXXxZduj1br4JibaBkGZRznbYibzxav6dZ4PMLIpzedaezm96ij1ZffLGeeHA3QOl%2FyRZOqskzkHzKvdq6%2FwebvoYlHZlQgCOKp&X-Amz-Signature=6ad40b52e330b93a84dabdac59da704ad1bdc0e7247db58d6e46dc354c9968c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

