---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MFA7V7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGcqa8dPUw8C6Gvk3y7VXbE7kOLMktKQxVEwVvvMaauOAiA9fiTOuPnUaye2heWucpWR6RMqMAigMA%2B3I2NiIhreYir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUirabH%2Fso%2BAhBk5FKtwDh5LSW%2B1ZD7SmYTy5QvguD2eHXSFYpVqy1nN76cdMj3iJCrNPD8na3KpOjliV2Pg6stBnY3iTeMyUyWhXydAX0gaeXTFI%2BaMNqOOR17FAcp2uLZb6Acu4bREHGF11FOgDpCUfkVzbiGrqDjpoUulfOmeQnXCZFD973OAUAOi23UMJKdzd77T0o%2BuLSlDbW4xMjTExo8KM6XaKeFhRueFWiTSwT9sQ%2BBgnB5q80xb6RUkzpl5utk%2B8L797kpiAOsuJQ36Mwxgzvjh61KTQHddpO%2BD4IfqsivCLtJWafhEG5N9AllPEj2%2BrbnXfAf7Y4PiQuW9i9%2BPAzvoTlkH8OvJKKsLIWoCgwmg93gG3hkISb9AI4JNriHSz6QGGGP4mK71dGwPe2TgrFUELdJi%2FXxb53gQaBN%2B4w3Q7X37b8IM3Kf9eGocRDxQDd2ANlsbyDLCWJa4wmcYIqEx%2BQYEleC34x39aYqwW8S1Eyq4v6pep9siFQSAMzjlx4i3h0BpAszNwDbz06xGfD0ZdRzl7fYvtHtL5WyE%2FHmPUFBUC2osNvYCzuqEbFVwcfKH29UNxjHZ6gVB80fv42vt%2Fsqau09LP%2BKPH2635kLDaq7HjDG2rt04RvTYj6m2r6UY31vowh6LGyQY6pgFKfILqVNazuAD58gIwPQLhf3GARM%2BO%2B%2F8U3s%2FGl0x%2B%2BGatldu8ZWkH2AQw%2FEZ2cgAaPzdg40tDA6%2FTIZr4U7uq3Oi%2FeCY59QpT9yhVkTPtGpOgudgAgJ0EEgq6%2BUSmf5i94wlGst%2FpJeTKiL%2BVPlvf4WAYeOaRpiVnRcEWlkhn%2BKsVsRcizO%2FuZQpsBhGNpJN81s6JTmZLaioMkshPVxQjGAx5%2BTFF&X-Amz-Signature=abd6c15270a3dde0ff422bec605c920edd74fa39d8d8b224cf26ca33eb876e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MFA7V7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGcqa8dPUw8C6Gvk3y7VXbE7kOLMktKQxVEwVvvMaauOAiA9fiTOuPnUaye2heWucpWR6RMqMAigMA%2B3I2NiIhreYir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUirabH%2Fso%2BAhBk5FKtwDh5LSW%2B1ZD7SmYTy5QvguD2eHXSFYpVqy1nN76cdMj3iJCrNPD8na3KpOjliV2Pg6stBnY3iTeMyUyWhXydAX0gaeXTFI%2BaMNqOOR17FAcp2uLZb6Acu4bREHGF11FOgDpCUfkVzbiGrqDjpoUulfOmeQnXCZFD973OAUAOi23UMJKdzd77T0o%2BuLSlDbW4xMjTExo8KM6XaKeFhRueFWiTSwT9sQ%2BBgnB5q80xb6RUkzpl5utk%2B8L797kpiAOsuJQ36Mwxgzvjh61KTQHddpO%2BD4IfqsivCLtJWafhEG5N9AllPEj2%2BrbnXfAf7Y4PiQuW9i9%2BPAzvoTlkH8OvJKKsLIWoCgwmg93gG3hkISb9AI4JNriHSz6QGGGP4mK71dGwPe2TgrFUELdJi%2FXxb53gQaBN%2B4w3Q7X37b8IM3Kf9eGocRDxQDd2ANlsbyDLCWJa4wmcYIqEx%2BQYEleC34x39aYqwW8S1Eyq4v6pep9siFQSAMzjlx4i3h0BpAszNwDbz06xGfD0ZdRzl7fYvtHtL5WyE%2FHmPUFBUC2osNvYCzuqEbFVwcfKH29UNxjHZ6gVB80fv42vt%2Fsqau09LP%2BKPH2635kLDaq7HjDG2rt04RvTYj6m2r6UY31vowh6LGyQY6pgFKfILqVNazuAD58gIwPQLhf3GARM%2BO%2B%2F8U3s%2FGl0x%2B%2BGatldu8ZWkH2AQw%2FEZ2cgAaPzdg40tDA6%2FTIZr4U7uq3Oi%2FeCY59QpT9yhVkTPtGpOgudgAgJ0EEgq6%2BUSmf5i94wlGst%2FpJeTKiL%2BVPlvf4WAYeOaRpiVnRcEWlkhn%2BKsVsRcizO%2FuZQpsBhGNpJN81s6JTmZLaioMkshPVxQjGAx5%2BTFF&X-Amz-Signature=06cf1912d621c1517eb06263c3f78b2ce09f5327d6854b567e612c3eb9918182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

