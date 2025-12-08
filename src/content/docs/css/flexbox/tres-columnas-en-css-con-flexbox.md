---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIVFHQJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuDsZsmAIwrJf53cad3e5ASIFzKlGf%2BDTGjzp%2BJEmWAiB1cpPcY2z52wvOB%2Bl6ur3SInw%2FSn05sRbrZDKIK4n4DCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5McoGjkRwZ87%2F5gKtwD%2FlRB3V9eKD9P59ASQGk1vtFZHuQSk7i4DujnBt%2B5NbpuR6JhsVDAHPUkl8dEfcWs8BneggF9eJPw48f9sv2UISh5lWWGf0xMYKf6es8S%2B73PttJShHijUVqqpwrWD3%2BeEyF9qtupakvsiAkjtXvckleXh0SckC7Xwj5CW8I59pIA6ksw0KySsJgILqpUsVfkqrX1%2BtMyEMshj9LI4dKj8izKbjqrMzACoV5Sw%2FWD7Br0BF93mG1A6LdF4y5Uv82QhmxjMM5hKGi8Tb8fClTM0TwUz5NBCDWV5W4bx0SErvLACsjjKOb%2FXMSSUBAH08pimA9E5P21wgTgBFIJQpb8xa8%2BvB7Fft%2BhrA%2FHP1gf98k8KuKM4%2B4M%2F4GSSjZbK0nhYHmec0SlC5Y7qbrNubrf7oWNMlbAcVK%2BVsNJ2RQGPJsLGh7w1o8FbwIA%2F0ISufqF1OZJct7A2MwjPUvdfNAQcT3wgvOfk5vPrp7QyjUpTpci3uCdV6Mk%2FZnNxtz5DtAgx85nGkqqGp7htROjryHd9hrTpRp4gmiK3XkCTfablQr%2FzDL9kgYi5GAyZ0KlKtfx7zP35eFQg0yMvSTSDx03cfMRBWB4Ir8G3HwTF06RsBbA08Vi4jb2nOx0d%2Fwwo%2FTayQY6pgGtGHQVL%2FPHCtyKTLyEzFeKLOM8quzJ%2F3xii6OJ8awv90Sb4jWjh6iwK%2BR8N6J%2FaPZ1n%2Bw%2BSeoJavH34GWsWxAs2hYiOSiedUzI0VNHLm%2Bd76jiNeaO8zFPTZ%2Bh1FQuLzjLzpQftOtRf9tsjwDoOvyMIWQMG%2Fqzd83ViyOu%2BIsSdB3fBgnA47pYdTbBnR2e4QZZc5hAy8MgW6nfHpQ29urBjJb1rg2f&X-Amz-Signature=6861090fef6ea4a4625c5428162b284c9ed88ba3c2570630edf599726a6ffacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIVFHQJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZuDsZsmAIwrJf53cad3e5ASIFzKlGf%2BDTGjzp%2BJEmWAiB1cpPcY2z52wvOB%2Bl6ur3SInw%2FSn05sRbrZDKIK4n4DCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5McoGjkRwZ87%2F5gKtwD%2FlRB3V9eKD9P59ASQGk1vtFZHuQSk7i4DujnBt%2B5NbpuR6JhsVDAHPUkl8dEfcWs8BneggF9eJPw48f9sv2UISh5lWWGf0xMYKf6es8S%2B73PttJShHijUVqqpwrWD3%2BeEyF9qtupakvsiAkjtXvckleXh0SckC7Xwj5CW8I59pIA6ksw0KySsJgILqpUsVfkqrX1%2BtMyEMshj9LI4dKj8izKbjqrMzACoV5Sw%2FWD7Br0BF93mG1A6LdF4y5Uv82QhmxjMM5hKGi8Tb8fClTM0TwUz5NBCDWV5W4bx0SErvLACsjjKOb%2FXMSSUBAH08pimA9E5P21wgTgBFIJQpb8xa8%2BvB7Fft%2BhrA%2FHP1gf98k8KuKM4%2B4M%2F4GSSjZbK0nhYHmec0SlC5Y7qbrNubrf7oWNMlbAcVK%2BVsNJ2RQGPJsLGh7w1o8FbwIA%2F0ISufqF1OZJct7A2MwjPUvdfNAQcT3wgvOfk5vPrp7QyjUpTpci3uCdV6Mk%2FZnNxtz5DtAgx85nGkqqGp7htROjryHd9hrTpRp4gmiK3XkCTfablQr%2FzDL9kgYi5GAyZ0KlKtfx7zP35eFQg0yMvSTSDx03cfMRBWB4Ir8G3HwTF06RsBbA08Vi4jb2nOx0d%2Fwwo%2FTayQY6pgGtGHQVL%2FPHCtyKTLyEzFeKLOM8quzJ%2F3xii6OJ8awv90Sb4jWjh6iwK%2BR8N6J%2FaPZ1n%2Bw%2BSeoJavH34GWsWxAs2hYiOSiedUzI0VNHLm%2Bd76jiNeaO8zFPTZ%2Bh1FQuLzjLzpQftOtRf9tsjwDoOvyMIWQMG%2Fqzd83ViyOu%2BIsSdB3fBgnA47pYdTbBnR2e4QZZc5hAy8MgW6nfHpQ29urBjJb1rg2f&X-Amz-Signature=8f04f662702f4b527a8b8763ad49e5f214095d964dae30df838eb101d45b3822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

