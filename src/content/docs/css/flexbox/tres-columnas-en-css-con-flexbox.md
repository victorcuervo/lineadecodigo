---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656C3JPHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC61w5J6yQ5M%2FflkWNnxrYlQFiWDCqDGzb7UkjtF0iU%2FAiEAorOvoNBTmD3mDgM3%2FbmUwTDKuZhki3o9jaKWpq4BMdgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMnk3zpjWsA%2BhJmaESrcA%2BQ0u99i0HygWwEeeZEFrKP2EmGLopIdq2qxqrR%2FVMQrEbpJaa9CxNtXfqCR8MX%2BBRydgqNaVtyHPZFGfUWHTlDmEBE75RvkiSXk7ktTaXEyuEbXi8hqBXaGozWzWYEHVC5TSsv2kUOKa8Br8o8IKYzZe4coWMob6aUHrxyhVowfgvixwbEcbSXweyoSy%2BtG3McAGbEeP4%2B8bEGFeFodVyr9BB8ZJNbb9Vkhf2yZd1ESRmufRz6HoCcf2oa%2BmnjgHk2msKIi9GRix%2FsQgSh%2BjLVxlzTf7Q1gsJ6GT7U2l2Cv5sSLuppe9cNRFX9d%2Ft14eJ%2B41Xc8GlhkopRzcxxQhYnFQGb6jEyp%2B7IeNFT8Hdpn2eEr6GQP2XsjwiNS8IRFLb8uGz88%2BVQyuUN7QHWWnzITCvhOLYJYLqHFEzWXXV4PoNX3wReDBle2NyYZhtQi9DAARXtvJmwgLGkJZbdeTM4tCZ0olQZqQqiMUMRqsBEO%2BbHSylwobtpcdk30fYOPrIpnP9N8b%2F%2FXHmTPaixA7diQOrQXq9dUCOk7N7iej7z%2BwdPteeF2YkskCFwG%2Fy%2FKJCDNev9sa3%2BguJ7rPKR1mo7zM6z2HCu%2BWk0sF4ePCGRNRv%2BpPv2sT8ZrK5JFMJrGzckGOqUBbkcwtGWao9K7x2SvPkcZ3CuGDLmvAQS806zmmLGKQ4kAGeJiSLlA6P%2BkMHvy5WHZqwygdV2a4rXCguC0A8VbLOp%2F6PmT1iObhvPl0lawW8HLQy52EqxgsZf%2FINiyVGBZLMNQvQ2A5CtyQ8V9P73MqHCdreZC%2Be5ki4bqYlYq2co3ZHkkUhiFUtawrJtV417OP26XEUFRz0SP%2FRuH7za2RRkP4F%2B2&X-Amz-Signature=98bb5824d90e05390a34acc1c35be75715813db5d511e107ba0b4bd2a47b81a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656C3JPHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC61w5J6yQ5M%2FflkWNnxrYlQFiWDCqDGzb7UkjtF0iU%2FAiEAorOvoNBTmD3mDgM3%2FbmUwTDKuZhki3o9jaKWpq4BMdgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMnk3zpjWsA%2BhJmaESrcA%2BQ0u99i0HygWwEeeZEFrKP2EmGLopIdq2qxqrR%2FVMQrEbpJaa9CxNtXfqCR8MX%2BBRydgqNaVtyHPZFGfUWHTlDmEBE75RvkiSXk7ktTaXEyuEbXi8hqBXaGozWzWYEHVC5TSsv2kUOKa8Br8o8IKYzZe4coWMob6aUHrxyhVowfgvixwbEcbSXweyoSy%2BtG3McAGbEeP4%2B8bEGFeFodVyr9BB8ZJNbb9Vkhf2yZd1ESRmufRz6HoCcf2oa%2BmnjgHk2msKIi9GRix%2FsQgSh%2BjLVxlzTf7Q1gsJ6GT7U2l2Cv5sSLuppe9cNRFX9d%2Ft14eJ%2B41Xc8GlhkopRzcxxQhYnFQGb6jEyp%2B7IeNFT8Hdpn2eEr6GQP2XsjwiNS8IRFLb8uGz88%2BVQyuUN7QHWWnzITCvhOLYJYLqHFEzWXXV4PoNX3wReDBle2NyYZhtQi9DAARXtvJmwgLGkJZbdeTM4tCZ0olQZqQqiMUMRqsBEO%2BbHSylwobtpcdk30fYOPrIpnP9N8b%2F%2FXHmTPaixA7diQOrQXq9dUCOk7N7iej7z%2BwdPteeF2YkskCFwG%2Fy%2FKJCDNev9sa3%2BguJ7rPKR1mo7zM6z2HCu%2BWk0sF4ePCGRNRv%2BpPv2sT8ZrK5JFMJrGzckGOqUBbkcwtGWao9K7x2SvPkcZ3CuGDLmvAQS806zmmLGKQ4kAGeJiSLlA6P%2BkMHvy5WHZqwygdV2a4rXCguC0A8VbLOp%2F6PmT1iObhvPl0lawW8HLQy52EqxgsZf%2FINiyVGBZLMNQvQ2A5CtyQ8V9P73MqHCdreZC%2Be5ki4bqYlYq2co3ZHkkUhiFUtawrJtV417OP26XEUFRz0SP%2FRuH7za2RRkP4F%2B2&X-Amz-Signature=f4501caea6315b98400c5ff22e0c552680c44509eab0d184c29373ebcd5fca27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

