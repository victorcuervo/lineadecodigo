---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623N4Q7ZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSozeD9BPplMOwfbZ6G3WeBvrjV2rAD8OjUElfwxqVlgIgBjLV%2Bjo4bUS1wiRKRudC7nPJbNAbJF2Zjn7QkljnvmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4I2Lnif4MwzyvffSrcA2tfEgcEpWBvOO9V0BznenGNXOoLIMX4AR8i4ve8At4KjwQuDqMFWntCFahatUQDEQFJVoNYMXaeDJlcJhJURlaI1J5rkE1pH5QOtWi6Wd9cwyNYQ3VvMrs5MiRmIVtF7%2BsS24tF0pwTcvlyZ9iyfg%2FnuSVtX2qNrtm4ocOCAnf54Ln6A%2B4dhLpvpfZMR8TKFFuknkP2n0tqLjFWgJf5C50Zfh3o44BSqtoEiVbjOpzOQ9mXgEoFIMRjDOi4fGtBCnpymfyB0KJaz00oyWZRXeFqRJIFUjA4BpFXOg%2FcJ5AsHPR315vyiOjceZogUfGLpX8QQRwHI1OvePrnJPQuZhqtdM4KZ%2FQe7Xi%2BhQ7ieEa4aT0lQNATPVxCYf7401KWWrrO4kisM%2B9pcTbKb7UOi1m6e0s5GP6W26Yjc0lpTNXNNIRnh871oU8p13H%2Bw1%2F6KCO%2FZAEZs7c%2FQ%2BTeopGSyGHo62fNhozgKXI3PoWdlkO1mZZ2oxvs9Qp66Bp%2FrA7cvtcHIpea5ilNFXc%2Bj1t%2BDpRtvf5OHo7LeghN4Cft31HOVIADT%2BWFpvBx76MAR0KyNmbNDOHcnNS3KfvEwkeqWOR%2BFq5A255HJg3g%2BTF0HoN1mPsxAYrBGL58xE38MI790skGOqUBInJUNOcz6tdBuFeyy4HZDJNxb67HZo7jK2xSVtACmgevgeUW93TxjiwiJ5%2Fl0EYDjCSJSjUaQbee2ESt4KUKBYIXpeNUEp8A%2FzKv7me5Jxy8GCgJnfHZ0ab%2FTx2SM%2BddaopzRw2egiCWoLmNHjHOiTSs5nsNQABc2wE%2BacQDQB86EH6CG4A6pYjE9fOmOAFpln9kbLOlmaTwgCcXlZPplCnZLBNO&X-Amz-Signature=351f65dcedca8138e07ef94fc5579fdf0da538ac4cb616418186a425d16bbf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623N4Q7ZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSozeD9BPplMOwfbZ6G3WeBvrjV2rAD8OjUElfwxqVlgIgBjLV%2Bjo4bUS1wiRKRudC7nPJbNAbJF2Zjn7QkljnvmUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4I2Lnif4MwzyvffSrcA2tfEgcEpWBvOO9V0BznenGNXOoLIMX4AR8i4ve8At4KjwQuDqMFWntCFahatUQDEQFJVoNYMXaeDJlcJhJURlaI1J5rkE1pH5QOtWi6Wd9cwyNYQ3VvMrs5MiRmIVtF7%2BsS24tF0pwTcvlyZ9iyfg%2FnuSVtX2qNrtm4ocOCAnf54Ln6A%2B4dhLpvpfZMR8TKFFuknkP2n0tqLjFWgJf5C50Zfh3o44BSqtoEiVbjOpzOQ9mXgEoFIMRjDOi4fGtBCnpymfyB0KJaz00oyWZRXeFqRJIFUjA4BpFXOg%2FcJ5AsHPR315vyiOjceZogUfGLpX8QQRwHI1OvePrnJPQuZhqtdM4KZ%2FQe7Xi%2BhQ7ieEa4aT0lQNATPVxCYf7401KWWrrO4kisM%2B9pcTbKb7UOi1m6e0s5GP6W26Yjc0lpTNXNNIRnh871oU8p13H%2Bw1%2F6KCO%2FZAEZs7c%2FQ%2BTeopGSyGHo62fNhozgKXI3PoWdlkO1mZZ2oxvs9Qp66Bp%2FrA7cvtcHIpea5ilNFXc%2Bj1t%2BDpRtvf5OHo7LeghN4Cft31HOVIADT%2BWFpvBx76MAR0KyNmbNDOHcnNS3KfvEwkeqWOR%2BFq5A255HJg3g%2BTF0HoN1mPsxAYrBGL58xE38MI790skGOqUBInJUNOcz6tdBuFeyy4HZDJNxb67HZo7jK2xSVtACmgevgeUW93TxjiwiJ5%2Fl0EYDjCSJSjUaQbee2ESt4KUKBYIXpeNUEp8A%2FzKv7me5Jxy8GCgJnfHZ0ab%2FTx2SM%2BddaopzRw2egiCWoLmNHjHOiTSs5nsNQABc2wE%2BacQDQB86EH6CG4A6pYjE9fOmOAFpln9kbLOlmaTwgCcXlZPplCnZLBNO&X-Amz-Signature=c3acccbd3ec6ac14536919c583906d321e28542037e88cfa745919f616b2058a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

