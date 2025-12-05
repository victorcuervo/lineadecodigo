---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOJGSMC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1LpzHcBmidVJkjSl%2BVjvvQlLM7at%2FtbxjdE0Zo2gVPAiBEYYtHopsjKLGOSe5AY9WHw20ndaP3sP5bQT8jVaD41Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMwaH3VnzKybIeV3ArKtwDkSbmO2aqUaNPq3kR%2FLYjqnnaPJnK%2BQT%2BSh9Pug5x6Cl%2B40qCnphvmGUVL%2FN3hH4XDIgZVRzqAV4R0umqasCraIpN53E4AoEJZAjQ0yb6g6LYfCoYvXbQr76Zxgk6Gj1RQXXvPTXEa8o4vCxjwuebutyNswigejH2514wWgWNLWG5vjvB24DZCIiVSrAgj6%2B50I5BXyEQ0iK%2F6q1CWIALyL7cw4uJLyHFjaNP6nutHTgu%2FdZGJlT2n6548YRsKFWT5RJl9VXudKCachl9pRQ0HlnFqVP95z8cm9Ya9rjgCwB1CuqtMS3GUz%2BaWTpTp%2BzLYr9KCTk1J0q8mzju6FoYJAXJ%2FhfPTXpWUsZk7yfHZd8%2B33hUDO8XL3eCZzjN8pch8iRPyzlgZSlt9ufLLHkUhn30LdSRHZLDl0fswNRBPdRmQSoWej502SL83tkgR5Pdiw5MD9neOi%2FYTIwxRzIE%2BgPGdLFkBIZZY8c%2B%2BbJ7vtZy3rERsGjCSxZMlkI4kwhe%2Bt3dLWnDUp2lYO62vYmAsoy9dkdZbEH6diFqrorfJykuyIzugmeSEyCNkH2ikCihiNOsb5iRXs9GB3A8A5hwXXVrsxDYyAzhEOh8Q%2BnThFtgzGYVDzq2RBXpJuMwm67JyQY6pgE79bzYEoHyOuSNVU1rlVX%2FsvsFrFz%2BdoTBKuIANWaP88DUOfKvROYiZQzTTeFw7cwlw6dmspy%2FVRy%2FVhqsg9TeZP%2Bs3v8O7EhyZOOy8BVQ9BuDiDNUXJNS1NTYDFU8LdIzTqd%2FDYOKpACVk8zFw03D1En00%2BG1A8HnXfgpaG0ts1gSeVNvqE2BJcMKAQ%2BwAFkUFXv%2FCpr0IWUgM%2BBaolQciarYpt32&X-Amz-Signature=989ea04efae7c7790ea3dc861964861d2a0c04e9813ffb2404826c54e299cd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOJGSMC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1LpzHcBmidVJkjSl%2BVjvvQlLM7at%2FtbxjdE0Zo2gVPAiBEYYtHopsjKLGOSe5AY9WHw20ndaP3sP5bQT8jVaD41Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMwaH3VnzKybIeV3ArKtwDkSbmO2aqUaNPq3kR%2FLYjqnnaPJnK%2BQT%2BSh9Pug5x6Cl%2B40qCnphvmGUVL%2FN3hH4XDIgZVRzqAV4R0umqasCraIpN53E4AoEJZAjQ0yb6g6LYfCoYvXbQr76Zxgk6Gj1RQXXvPTXEa8o4vCxjwuebutyNswigejH2514wWgWNLWG5vjvB24DZCIiVSrAgj6%2B50I5BXyEQ0iK%2F6q1CWIALyL7cw4uJLyHFjaNP6nutHTgu%2FdZGJlT2n6548YRsKFWT5RJl9VXudKCachl9pRQ0HlnFqVP95z8cm9Ya9rjgCwB1CuqtMS3GUz%2BaWTpTp%2BzLYr9KCTk1J0q8mzju6FoYJAXJ%2FhfPTXpWUsZk7yfHZd8%2B33hUDO8XL3eCZzjN8pch8iRPyzlgZSlt9ufLLHkUhn30LdSRHZLDl0fswNRBPdRmQSoWej502SL83tkgR5Pdiw5MD9neOi%2FYTIwxRzIE%2BgPGdLFkBIZZY8c%2B%2BbJ7vtZy3rERsGjCSxZMlkI4kwhe%2Bt3dLWnDUp2lYO62vYmAsoy9dkdZbEH6diFqrorfJykuyIzugmeSEyCNkH2ikCihiNOsb5iRXs9GB3A8A5hwXXVrsxDYyAzhEOh8Q%2BnThFtgzGYVDzq2RBXpJuMwm67JyQY6pgE79bzYEoHyOuSNVU1rlVX%2FsvsFrFz%2BdoTBKuIANWaP88DUOfKvROYiZQzTTeFw7cwlw6dmspy%2FVRy%2FVhqsg9TeZP%2Bs3v8O7EhyZOOy8BVQ9BuDiDNUXJNS1NTYDFU8LdIzTqd%2FDYOKpACVk8zFw03D1En00%2BG1A8HnXfgpaG0ts1gSeVNvqE2BJcMKAQ%2BwAFkUFXv%2FCpr0IWUgM%2BBaolQciarYpt32&X-Amz-Signature=6d3c1a8e1bfe505c37f56138787be6dfe334ed3328596d4cf51a1aba6266af57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

