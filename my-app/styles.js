import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d1606',
    },
    box: {
        backgroundColor: '#d2691e',
        padding: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        width: '100%',
        maxWidth: 400,
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    buttonBox: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#5a2d0c',
        borderRadius: 5,
        overflow: 'hidden',
    },
    welcomeButton: {
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5a2d0c',
        elevation: 2, 
    },
    title: {
        color: '#ffffff',
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#5a2d0c',
        paddingVertical: 10,
        paddingTop: 50,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },
    navbarButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 5,
        backgroundColor: '#3d3d3d',
        color: 'white',
    },
    button: {
        backgroundColor: '#2d1606',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
});

export default styles;