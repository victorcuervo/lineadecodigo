---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAFFT4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIE3lW6o3fL5KFVtR%2FqmDUfP1iZrCMhTwIN1qxXSs%2BeLMAiA%2BJ4ToN2ELxVVwWCX0PvIoStga%2FRkBu3inD136pkfB1ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMkG%2BZSVHlDqZ4mONiKtwDo%2FLtaBgjmlPtGARaf9W5Dj0D%2F%2FlKccNdheWkxHNUG5EhlArZmSQPv7g84o6eej7J87Ih5xIS3xKgPcp%2FNvzfj%2BBXayovKg2NzNYUrJfoTAWs%2FKSFMBI2eqMD%2FyS%2F7ICWE2zU56hUso5Sgqk3iFZ3djtwo%2Fw%2FA2tTiqT3Qh0LzhpK%2BLW768WdYMq8uPURFyISWZ%2Fvzd4WMtFUNdKAHR947tHUt4ydb%2BU3FdmJLat%2BEVMv9oRtExfUv3zXKzx%2Fzy7cIeOEVJM7mEfGaP3BowA2%2BDR3RteIh1INGyeJmmfWz1ph%2Fhf%2B5KlKiYjyHp37eahlWiMFSD8Kw1CmnxbogPMO0lRXjvB3J5ChVH8U7ypLHeA5uKIE1l4aG8DH%2F6UT6OiPHiTkQSuFWxn7yNAXWLJQAGfxAbuwWugEBCwojfAS9ShRxoJUuJigDGFNUKFFduqEs%2FoNfsc8hJ0DAeQrffgt%2B8bgRoUFazrmd6hNlY5XakEtDPKPDgTwvn4MjhhsbnB6CYcIVWgHjQW6xIzoWKXEJlCO84qmOxxGfxxQGTiLVV42IkjrYOapDlNqmoFOx4fproM8OBJBPpH7tJQCWTHsPo5D7xxU9U9y7adlGOHY4JuqcQBnkBT79V4Rl2Ywv%2FLDyQY6pgHWDsFZmygn7O8pACrSkJNYXlMQaMP9C9qBTrhc%2Fz4So4JSACW9NxqJB1iZInlZMuTwN7lbYyi4S7W25YAZdGPtDYR9eLg9RqEtsmpnSux3YQwUPVeJh5sLvxmKfOKW%2BQmdZq2ax5irDrfOskyy0cqD%2Fh2CePLXEY%2BRYm8eJn%2F7eqNKVY8aCnI2ssZUkdI%2BRG4cmDppyaz%2FITZmM8gnY%2BuhYwdOHOxC&X-Amz-Signature=386351eb89613104bea818f1bb87f6caafd41560ba91228394bd6c3ed152ef78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAFFT4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIE3lW6o3fL5KFVtR%2FqmDUfP1iZrCMhTwIN1qxXSs%2BeLMAiA%2BJ4ToN2ELxVVwWCX0PvIoStga%2FRkBu3inD136pkfB1ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMkG%2BZSVHlDqZ4mONiKtwDo%2FLtaBgjmlPtGARaf9W5Dj0D%2F%2FlKccNdheWkxHNUG5EhlArZmSQPv7g84o6eej7J87Ih5xIS3xKgPcp%2FNvzfj%2BBXayovKg2NzNYUrJfoTAWs%2FKSFMBI2eqMD%2FyS%2F7ICWE2zU56hUso5Sgqk3iFZ3djtwo%2Fw%2FA2tTiqT3Qh0LzhpK%2BLW768WdYMq8uPURFyISWZ%2Fvzd4WMtFUNdKAHR947tHUt4ydb%2BU3FdmJLat%2BEVMv9oRtExfUv3zXKzx%2Fzy7cIeOEVJM7mEfGaP3BowA2%2BDR3RteIh1INGyeJmmfWz1ph%2Fhf%2B5KlKiYjyHp37eahlWiMFSD8Kw1CmnxbogPMO0lRXjvB3J5ChVH8U7ypLHeA5uKIE1l4aG8DH%2F6UT6OiPHiTkQSuFWxn7yNAXWLJQAGfxAbuwWugEBCwojfAS9ShRxoJUuJigDGFNUKFFduqEs%2FoNfsc8hJ0DAeQrffgt%2B8bgRoUFazrmd6hNlY5XakEtDPKPDgTwvn4MjhhsbnB6CYcIVWgHjQW6xIzoWKXEJlCO84qmOxxGfxxQGTiLVV42IkjrYOapDlNqmoFOx4fproM8OBJBPpH7tJQCWTHsPo5D7xxU9U9y7adlGOHY4JuqcQBnkBT79V4Rl2Ywv%2FLDyQY6pgHWDsFZmygn7O8pACrSkJNYXlMQaMP9C9qBTrhc%2Fz4So4JSACW9NxqJB1iZInlZMuTwN7lbYyi4S7W25YAZdGPtDYR9eLg9RqEtsmpnSux3YQwUPVeJh5sLvxmKfOKW%2BQmdZq2ax5irDrfOskyy0cqD%2Fh2CePLXEY%2BRYm8eJn%2F7eqNKVY8aCnI2ssZUkdI%2BRG4cmDppyaz%2FITZmM8gnY%2BuhYwdOHOxC&X-Amz-Signature=cddb92509d9478dfe068d28c7ebbe93fb710ae1e06e7a391e00c81ffac4e7d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

