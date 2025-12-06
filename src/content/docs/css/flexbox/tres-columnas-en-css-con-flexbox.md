---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTLOUBS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FlOe0%2BFY72awgIyuZPnfAA8juBgcp7QgbiP2C2uVwMQIgFNGfPZhK63F3Zgt7jo8HDcuweCabL%2FIxuNPVbw0%2FkQUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCnSRm8Y%2B8C6dH%2BfjircA3clW5sdyGw4c2mUIKI%2BqHGmGPA%2FE6omv0f4MHZJEXDuGUdWwUfxqyLqaLm%2B7ExWRLoI2ErH6Wc1X64jVrTgZ9Q1rqvx5KzWatiSsVUDygvZOudEUqgsGg52%2F%2BwUMC6pOFu6yANUBr%2B5XhSsZbj%2Bodoa7UeV8U0LuAS2Ttygv1%2FKF%2BtTpeuEYXsYTpfzXgzg5yZOUTu4mn5KRRZd141SmHaFhsofVk0btvnUSIizqqRllg7Iq%2BVg2G5NRjccYjluWz1Icf7nDX0NwiHzaAAssvjeayaQdyDjafN%2B0%2Bmjqu%2FZLh8VigKMlzxKKg2RSMYeNMEzfb8tFePflZjNXImTKwv0i8lXm%2B1RqLM94lcQW2Arl2j9YkGI5%2BC2JRgsKetkv60HokJPVvqH5hj9zCy6sI%2BpNO7owN1HdOi9JYXsctCbhEcKDthu4vuBJbWPznuz4ojE%2BJMzzA1zs4HCyMiJjKFeeY2DPdoTOVr3%2F4jWpqf2Z3P%2FhDhjbf2LEvArZkIokpKMKOlJvXXlAZXXMnFHqBNKfmh%2ByhAX2pG0amGAsok9d020jrog0XZrJZUFAqJ5kfUhGBTFOHYvCorSssELqNF2aH15tMrg%2B%2B0aqrN%2BkYk%2F4mrVTSVLcebzdKUrMI7H0ckGOqUBDcaqACGui6z2tOOUqTW6rnilMPTnPRl6nVYNNEQQ9YgnZIpzgU4WJdkdPWHMGpS8gQd9ONfheuCB8WsJQal%2FIKBGgrpcI0P7dOEhB3re%2BnKPNSOdogFaA25qmEufy9lN55HKQLP7RhR%2F4Ri6Yg0o2s4z9X5POnMg%2FDmGEAANrsabiz6IQpbKrYyo3moxe76PpsfLNNgHpG6g%2BnlPVLn9e5keubGT&X-Amz-Signature=9c521d117c5b8cae2907b2bfbffabf8b53faead00b7eff0ab5fabe6bf5e27c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTLOUBS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FlOe0%2BFY72awgIyuZPnfAA8juBgcp7QgbiP2C2uVwMQIgFNGfPZhK63F3Zgt7jo8HDcuweCabL%2FIxuNPVbw0%2FkQUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCnSRm8Y%2B8C6dH%2BfjircA3clW5sdyGw4c2mUIKI%2BqHGmGPA%2FE6omv0f4MHZJEXDuGUdWwUfxqyLqaLm%2B7ExWRLoI2ErH6Wc1X64jVrTgZ9Q1rqvx5KzWatiSsVUDygvZOudEUqgsGg52%2F%2BwUMC6pOFu6yANUBr%2B5XhSsZbj%2Bodoa7UeV8U0LuAS2Ttygv1%2FKF%2BtTpeuEYXsYTpfzXgzg5yZOUTu4mn5KRRZd141SmHaFhsofVk0btvnUSIizqqRllg7Iq%2BVg2G5NRjccYjluWz1Icf7nDX0NwiHzaAAssvjeayaQdyDjafN%2B0%2Bmjqu%2FZLh8VigKMlzxKKg2RSMYeNMEzfb8tFePflZjNXImTKwv0i8lXm%2B1RqLM94lcQW2Arl2j9YkGI5%2BC2JRgsKetkv60HokJPVvqH5hj9zCy6sI%2BpNO7owN1HdOi9JYXsctCbhEcKDthu4vuBJbWPznuz4ojE%2BJMzzA1zs4HCyMiJjKFeeY2DPdoTOVr3%2F4jWpqf2Z3P%2FhDhjbf2LEvArZkIokpKMKOlJvXXlAZXXMnFHqBNKfmh%2ByhAX2pG0amGAsok9d020jrog0XZrJZUFAqJ5kfUhGBTFOHYvCorSssELqNF2aH15tMrg%2B%2B0aqrN%2BkYk%2F4mrVTSVLcebzdKUrMI7H0ckGOqUBDcaqACGui6z2tOOUqTW6rnilMPTnPRl6nVYNNEQQ9YgnZIpzgU4WJdkdPWHMGpS8gQd9ONfheuCB8WsJQal%2FIKBGgrpcI0P7dOEhB3re%2BnKPNSOdogFaA25qmEufy9lN55HKQLP7RhR%2F4Ri6Yg0o2s4z9X5POnMg%2FDmGEAANrsabiz6IQpbKrYyo3moxe76PpsfLNNgHpG6g%2BnlPVLn9e5keubGT&X-Amz-Signature=f24af15228f76d401bbe2b2d6127c9cfcff405ed5f713b9f1df55dc22116bb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

